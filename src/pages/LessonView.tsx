import React, {useReducer, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
  Dimensions,
  Button,
  Platform,
  Share as ReactNativeShare,
  FlatList,
} from 'react-native';
import Share from 'react-native-share';
import {AppBar} from '../components/AppBar';
import {
  getResponsiveResource,
  isTablet,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {BottomBar} from '../components/BottomBar';
import {isPortrait} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import WebView from 'react-native-webview';
import {BEEBOT_HTML, JAVASCRIPT_BEEBOT} from '../constants/BeeBot';
import {LayoutWrapper} from '../components/LayoutWrapper';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducer} from '../redux/Store';
import {INCREMENT} from '../redux/Actions';
import base64 from 'react-native-base64';
import {LESSON_HTML} from '../constants/Lesson';
import RNFS from 'react-native-fs';
import {BASE_64_LESSON_PDF} from '../constants/LessonsPdfBase64';
import {err} from 'react-native-svg/lib/typescript/xml';
import {ACTIVITY_CONSTANTS} from '../constants/ActivityConstants';
import PdfFile from '../assets/pdf/lesson.pdf';
import {RoundedButton} from '../components/RoundedButton';

import FarmImage from '../assets/img/farm1.png';
import FarmImageGridMobile from '../assets/img/farm_mobile.png';
import FarmImageGridTablet from '../assets/img/farm_tablet.png';
import FarmImageGridTabletLarge from '../assets/img/farm_tabletlg.png';
import {Heading} from '../components/Heading';
import {LessonContentLinks} from '../components/LessonContentLinks';
import {Paragraph} from '../components/Paragraph';
import {SubHeading} from '../components/SubHeading';

const LessonView = ({navigation}: any) => {
  const [showLoading, setShowLoading] = React.useState(true);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const mainContentWidth = useResponsiveWidth(100);
  const mainContentHeight = isPortrait()
    ? useResponsiveHeight(85)
    : useResponsiveHeight(70);
  const {t} = useTranslation();
  const webView = React.useRef<any>();
  const char = useSelector((state: RootReducer) => state.bleReducer.char);
  const sourcePath = RNFS.MainBundlePath + '/assets/pdf/lesson.pdf';
  const destinationPath = RNFS.ExternalStorageDirectoryPath + '/test.pdf';
  const scroll = React.useRef<any>();
  React.useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  const savePdf = () => {
    let path = RNFS.DocumentDirectoryPath + '/lesson.pdf';
    RNFS.writeFile(path, BASE_64_LESSON_PDF, 'base64')
      .then(success => {
        console.log('FILE WRITTEN!');
        Share.open({
          title: 'Share PDF',
          message: 'Sharing a PDF file',
          url: `file://${path}`,
          type: 'application/pdf',
          saveToFiles: true,
        })
          .then(() => {
            // File shared successfully
          })
          .catch(error => {
            console.error('Error sharing file:', error);
          });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <LayoutWrapper
      scrollRef={scroll}
      enableScroll={true}
      navigation={navigation}>
      <TouchableOpacity
        onPress={async () => {
          navigation.navigate('Lessons');
        }}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          marginTop: isPortrait()
            ? useResponsiveHeight(3)
            : useResponsiveHeight(5),
          width: useResponsiveWidth(90),
          // marginBottom : useResponsiveHeight(2)
        }}>
        <Text
          style={{
            fontSize: isTabletAndPortrait()
              ? useResponsiveFontSize(1.5)
              : isTabletAndLandScape()
              ? useResponsiveFontSize(1.5)
              : useResponsiveFontSize(2),
            width: useResponsiveWidth(90),
            textAlign: 'right',
            color: CONSTANTS.COLORS.GRAY,
            fontStyle: 'italic',
          }}>
          {t('back_to_topics')}
        </Text>
      </TouchableOpacity>
      <View style={{}}>
        {/* TODO MAIN CONTENT */}

        <View
          style={{
            // backgroundColor : "blue",
            width: useResponsiveWidth(90),
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: useResponsiveHeight(4),
          }}>
          {/* TAG START */}
          <View
            style={{
              marginRight: 'auto',
              backgroundColor: CONSTANTS.COLORS.GREEN,
              padding: 10,
              width: isPortrait()
                ? useResponsiveWidth(35)
                : useResponsiveWidth(30),
              marginBottom: useResponsiveWidth(2),
              borderRadius: 3,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: isTabletAndPortrait()
                  ? useResponsiveFontSize(1.5)
                  : isTabletAndLandScape()
                  ? useResponsiveFontSize(1.5)
                  : useResponsiveFontSize(2),
                color: CONSTANTS.COLORS.WHITE,
                // fontStyle: 'italic',
              }}>
              {'Занятие № 4'}
            </Text>
          </View>
          {/* TAG END */}

          {/* HEADING START */}
          <View
            style={{
              width: useResponsiveWidth(90),
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: useResponsiveWidth(4),
            }}>
            <Text
              style={{
                fontSize: isTabletAndPortrait()
                  ? useResponsiveFontSize(2)
                  : isTabletAndLandScape()
                  ? useResponsiveFontSize(2)
                  : useResponsiveFontSize(3.5),
                width: useResponsiveWidth(90),
                textAlign: 'left',
                fontFamily: 'Roboto-Bold',
                fontWeight: '700',
                color: CONSTANTS.COLORS.BLACK,
              }}>
              {'Профессиональные\nпомощники'.toUpperCase()}
            </Text>
          </View>

          {/* HEADING END */}

          {/* IMAGE START */}
          <Image
            resizeMode={'cover'}
            style={{
              aspectRatio: 1,
              backgroundColor: 'red',
              width: isTabletAndPortrait()
                ? useResponsiveWidth(60)
                : isTabletAndLandScape()
                ? useResponsiveWidth(60)
                : useResponsiveWidth(90),
              borderRadius: 10,
              marginBottom: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}
            source={getResponsiveResource(
              FarmImageGridMobile,
              FarmImageGridTablet,
              FarmImageGridTablet,
            )}></Image>
          {/* IMAGE END */}

          <Heading text={'Содержание'.toUpperCase()}></Heading>
          {[
            {title: 'Цели', postion: 850},
            {title: 'Задачи', postion: 1050},
            {title: 'Программное содержание', postion: 1719},
            {title: 'Словарная работа', postion: 1972},
            {title: 'Предварительная работа', postion: 2100},
            {title: 'Методы и приемы', postion: 2088},
            {title: 'Техническое оснащение', postion: 1670},
            {title: 'Этапы работы и содержание этапов', postion: 2288},
          ].map((content, index) => {
            return (
              <LessonContentLinks
                key={index}
                onClick={() => {
                  scroll.current.scrollTo({
                    x: 0,
                    y: content.postion,
                    animated: true,
                  });
                }}
                text={content.title}></LessonContentLinks>
            );
          })}

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <Heading text={'цели'.toUpperCase()}></Heading>
            <Paragraph
              text={
                'Формирование знаний о «бытовых приборах – помощниках в доме (миксер)».' +
                '\n\n' +
                'Собрать из конструктора Lego «Первые механизмы» модель миксера.' +
                '\n\n' +
                'Формирование навыка конструирования с новым видом конструктора.'
              }></Paragraph>
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <Heading text={'задачи'.toUpperCase()}></Heading>
            <SubHeading text={'Обучающие:'}></SubHeading>
            <FlatList
              scrollEnabled={false}
              data={[
                {
                  key: 'Систематизировать знания детей о бытовых приборах, (их особенностях и функциях), помогающих людям выполнять работу по дому;',
                },
                {
                  key: 'Формировать знание о работе простых механизмов в бытовых приборах.',
                },
                {
                  key: 'Вырабатывать у де­тей навык ориентации в деталях конструктора,их классификации.',
                },
                {key: 'Вырабатывать умение детей конструировать по 3D-схеме.'},
                {
                  key: 'Развивать словарный запас и навыки общения при объяснении работы модели.',
                },
              ]}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                      gap: useResponsiveWidth(2),
                    }}>
                    <Paragraph flex={2} text={'\u2022'}></Paragraph>
                    <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />
            <SubHeading text={'Развивающие:'}></SubHeading>
            <FlatList
              scrollEnabled={false}
              data={[
                {key: 'Способствовать развитию мелкой моторики руки у детей.'},
                {
                  key: 'Развивать образное и простран­ственное мышление, фантазию, творческую активность, а также мо­торику рук, последовательность в выполнении действий.',
                },
              ]}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                      gap: useResponsiveWidth(2),
                    }}>
                    <Paragraph flex={2} text={'\u2022'}></Paragraph>
                    <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />
            <SubHeading text={'Воспитательные:'}></SubHeading>
            <FlatList
              scrollEnabled={false}
              data={[
                {key: 'Воспитывать интерес к техническим видам творчества.'},
                {
                  key: 'Формировать навыки взаимодействия в коллективе сверстников, доброжелательное отношение друг к другу.',
                },
              ]}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                      gap: useResponsiveWidth(2),
                    }}>
                    <Paragraph flex={2} text={'\u2022'}></Paragraph>
                    <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <Heading text={'тематические поля'.toUpperCase()}></Heading>
            <Paragraph
              underline={true}
              text={
                'Поле «Профессиональные помощники», арт. 123456'
              }></Paragraph>
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <Heading text={'Программное содержание'.toUpperCase()}></Heading>
            <Paragraph
              text={
                'Ознакомление детей с конструктором Lego «Первые механизмы»' +
                '\n\n' +
                'Просмотр мультимедийной презентации «Профессиональные помощники».' +
                '\n\n' +
                'Построение модели «Миксера».' +
                '\n\n' +
                'Свободная игра с постройками.'
              }></Paragraph>
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <Heading text={'словарная работа'.toUpperCase()}></Heading>
            <Paragraph
              text={'рычаг с ручкой, зубчатое колесо, ось, балка.'}></Paragraph>
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <Heading text={'Предварительная работа'.toUpperCase()}></Heading>
            <Paragraph
              text={
                'Наблюдение дома за работой миксера во время приготовления блюд мамой.' +
                '\n\n' +
                'Организация сюжетно-ролевой игры «Хозяйки на кухне».' +
                '\n\n' +
                'Демонстрация педагогом мультимедийной пре­зентации «Профессиональные помощники».'
              }></Paragraph>
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <Heading text={'Методы и приемы'.toUpperCase()}></Heading>
            <Paragraph
              text={
                'Словесный метод (беседа, рассказ).' +
                '\n\n' +
                'Репродуктивный (воспроизводящий).' +
                '\n\n' +
                'Иллюстративный (объяснение сопровождается демонстрацией наглядного материала).' +
                '\n\n' +
                'Исследовательский метод.' +
                'Метод практического закрепления знаний на занятии.'
              }></Paragraph>
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <Heading
              text={'Этапы работы и содержание этапов'.toUpperCase()}></Heading>
            <SubHeading
              fontWeight="700"
              text={'1. Организационный момент '}></SubHeading>
            <FlatList
              scrollEnabled={false}
              data={[
                {key: 'создание игровой мотивации;'},
                {
                  key: 'использование сюрпризных моментов.',
                },
              ]}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                      gap: useResponsiveWidth(2),
                    }}>
                    <Paragraph flex={2} text={'\u2022'}></Paragraph>
                    <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: useResponsiveWidth(90),
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(44),
                paddingLeft: 15,
              }}>
              <SubHeading flex={1} text={'деятельность\nпедагога'}></SubHeading>
            </View>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(45),
                paddingLeft: 15,
              }}>
              <SubHeading
                flex={1}
                text={'деятельность\nвоспитанника'}></SubHeading>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: useResponsiveWidth(90),
              justifyContent: 'space-between',
              marginTop: useResponsiveWidth(1),
            }}>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(44),
                padding: 15,
              }}>
              <Paragraph
                flex={1}
                text={`Педагог: Робот Чип увидел, что мы в прошлый раз перевезли на автомобиле большое количество овощей и фруктов. Он заинтересовался, что можно сделать из собранного урожая.
                    Давайте поможем ему и разъясним все то, что ему показалось непонятным. А еще познакомимся с профессиональными помощниками в доме и на кухне.`}></Paragraph>
            </View>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(45),
                padding: 15,
                position: 'relative',
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  padding: 15,
                }}>
                <Paragraph fontColor="red" text="*"></Paragraph>
              </View>
              <Paragraph
                flex={1}
                text={`Дети входят в компьютерный класс и видят на столах ящики с конструктором Lego «Первые механизмы» и бытовые приборы: пылесос, электрочайник, фен, миксер.`}></Paragraph>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: useResponsiveWidth(90),
              justifyContent: 'space-between',
              marginTop: useResponsiveWidth(1),
            }}>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(44),
                padding: 15,
              }}>
              <Paragraph
                flex={1}
                text={`Демонстрация педагогом слайдов мульти­медийной презентации «Профессиональные помощники».`}></Paragraph>
            </View>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(45),
                padding: 15,
                position: 'relative',
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  padding: 15,
                  flexDirection: 'row',
                }}>
                <Paragraph fontColor="red" text="*"></Paragraph>
                <Paragraph fontColor="red" text="*"></Paragraph>
              </View>
              <Paragraph
                flex={1}
                text={`Дети смотрят презентацию.`}></Paragraph>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: useResponsiveWidth(90),
              justifyContent: 'space-between',
              marginTop: useResponsiveWidth(1),
            }}>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(44),
                padding: 15,
              }}>
              <Paragraph
                flex={1}
                text={`Организация дидактических игр по слайдам презентации.`}></Paragraph>
            </View>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(45),
                padding: 15,
                position: 'relative',
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  padding: 15,
                  flexDirection: 'row',
                }}>
                <Paragraph fontColor="red" text="*"></Paragraph>
                <Paragraph fontColor="red" text="*"></Paragraph>
                <Paragraph fontColor="red" text="*"></Paragraph>
              </View>
              <Paragraph
                flex={1}
                text={`Дети выполняют задания дидактических игр.`}></Paragraph>
            </View>
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <SubHeading
              fontStyle="italic"
              text={'Ожидаемые результаты'}></SubHeading>
            <FlatList
              scrollEnabled={false}
              data={[
                {
                  start: ['*'],
                  key: ' Объединение детей для поиска ответов на вопросы. Формирование знаний детей о профессиональных помощниках —  электроприборах .',
                },
                {
                  start: ['*', '*'],
                  key: ' Формирование навыков цвета, формы, счета, анализа и синтеза.',
                },
                {
                  start: ['*', '*', '*'],
                  key: ' Координация внимания.',
                },
              ]}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    {item.start.map((star, index) => {
                      return (
                        <Paragraph
                          key={index}
                          flex={2}
                          fontColor="red"
                          fontStyle="italic"
                          text={star}></Paragraph>
                      );
                    })}
                    <Paragraph
                      fontStyle="italic"
                      flex={90}
                      text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(3)
                : useResponsiveHeight(7),
            }}>
            <SubHeading
              fontWeight="700"
              text={'2. Основная часть '}></SubHeading>
            <FlatList
              scrollEnabled={false}
              data={[
                {
                  key: 'конструирование;',
                },
                {
                  key: 'свободная игра-экспериментирование с моделью.',
                },
              ]}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <Paragraph flex={4} text={'\u2022'}></Paragraph>
                    <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: useResponsiveWidth(90),
              justifyContent: 'space-between',
              marginTop: useResponsiveWidth(1),
            }}>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(44),
                paddingLeft: 15,
              }}>
              <SubHeading flex={1} text={'деятельность\nпедагога'}></SubHeading>
            </View>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(45),
                paddingLeft: 15,
              }}>
              <SubHeading
                flex={1}
                text={'деятельность\nвоспитанника'}></SubHeading>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: useResponsiveWidth(90),
              justifyContent: 'space-between',
              marginTop: useResponsiveWidth(1),
            }}>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(44),
                padding: 15,
              }}>
              <Paragraph flex={1} text={`Физкультурная минутка`}></Paragraph>
            </View>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(45),
                padding: 15,
                position: 'relative',
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  padding: 15,
                }}>
                <Paragraph fontColor="red" text="*"></Paragraph>
              </View>
              <Paragraph
                flex={1}
                text={`Дети выполняют несколько раз упражнения.`}></Paragraph>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: useResponsiveWidth(90),
              justifyContent: 'space-between',
              marginTop: useResponsiveWidth(1),
            }}>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(44),
                padding: 15,
              }}>
              <Paragraph
                flex={1}
                text={`Давайте поможем Чипу создать механизм, который позволит смешивать различные фрукты и овощи для приготовления блюд – миксер.
                Конструирование автомобиля.
                Педагог контролирует процесс сборки, при необходимости помогает ребятам.`}></Paragraph>
            </View>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(45),
                padding: 15,
                position: 'relative',
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  padding: 15,
                  flexDirection: 'row',
                }}>
                <Paragraph fontColor="red" text="*"></Paragraph>
                <Paragraph fontColor="red" text="*"></Paragraph>
              </View>
              <Paragraph
                flex={1}
                text={`Дети конструируют миксер по словесной инструкции педагога и по 3D-схеме.`}></Paragraph>
            </View>
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <SubHeading
              fontStyle="italic"
              text={'Ожидаемые результаты'}></SubHeading>
            <FlatList
              scrollEnabled={false}
              data={[
                {
                  start: ['*'],
                  key: ' Переключение детей на другой вид деятельности. Отдых детей.',
                },
                {
                  start: ['*', '*'],
                  key: ' Развитие конструктивных умений; умений соотносить образец с собственной постройкой, видеть и исправлять собственные ошибки.',
                },
              ]}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    {item.start.map((star, index) => {
                      return (
                        <Paragraph
                          key={index}
                          flex={2}
                          fontColor="red"
                          text={star}></Paragraph>
                      );
                    })}
                    <Paragraph
                      fontStyle="italic"
                      flex={90}
                      text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(2)
                : useResponsiveHeight(4),
            }}>
            <SubHeading
              fontWeight="700"
              text={'3. Заключительная часть '}></SubHeading>
            <FlatList
              scrollEnabled={false}
              data={[
                {
                  key: 'свободная игра-экспериментирование с моделью.',
                },
                {
                  key: 'игровой анализ занятия (итог) рефлексия',
                },
                {
                  key: 'уборка своего рабочего места.',
                },
              ]}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <Paragraph flex={4} text={'\u2022'}></Paragraph>
                    <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: useResponsiveWidth(90),
              justifyContent: 'space-between',
              marginTop: useResponsiveWidth(1),
            }}>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(44),
                paddingLeft: 15,
              }}>
              <SubHeading flex={1} text={'деятельность\nпедагога'}></SubHeading>
            </View>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(45),
                paddingLeft: 15,
              }}>
              <SubHeading
                flex={1}
                text={'деятельность\nвоспитанника'}></SubHeading>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: useResponsiveWidth(90),
              justifyContent: 'space-between',
              marginTop: useResponsiveWidth(1),
            }}>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(44),
                padding: 15,
              }}>
              <Paragraph
                flex={1}
                text={`Педагог хвалит детей за проделанную работу и предлагает расставить свои модели для демонстрации.Педагог создает условия детям для самостоятельной игры с собранной моделью, используя персонажей Lego «Первые механизмы.`}></Paragraph>
            </View>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(45),
                padding: 15,
                position: 'relative',
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  padding: 15,
                  flexDirection: 'row',
                }}>
                <Paragraph fontColor="red" text="*"></Paragraph>
              </View>
              <Paragraph
                flex={1}
                text={`Дети с педагогом обсуждают конструктивные особенности моделей своих роботов.
                Дети разыгрывают собственные сюжеты, объединяясь в пары, тройки или индивидуально.`}></Paragraph>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: useResponsiveWidth(90),
              justifyContent: 'space-between',
              marginTop: useResponsiveWidth(1),
            }}>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(44),
                padding: 15,
              }}>
              <Paragraph
                flex={1}
                text={`После игры педагог предлагает навести порядок на своем рабочем месте и разобрать модель.`}></Paragraph>
            </View>
            <View
              style={{
                backgroundColor: CONSTANTS.COLORS.LIGHT_TEXT,
                width: useResponsiveWidth(45),
                padding: 15,
                position: 'relative',
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  padding: 15,
                  flexDirection: 'row',
                }}>
                <Paragraph fontColor="red" text="*"></Paragraph>
                <Paragraph fontColor="red" text="*"></Paragraph>
              </View>
              <Paragraph
                flex={1}
                text={`Дети раскладывают разобранные детали модели по контейнерам или коробкам.`}></Paragraph>
            </View>
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <SubHeading
              fontStyle="italic"
              text={'Ожидаемые результаты'}></SubHeading>
            <FlatList
              scrollEnabled={false}
              data={[
                {
                  start: ['*'],
                  key: ' Развитие способности анализировать свою модель, творческих способностей, игровой самодеятельности.',
                },
                {
                  start: ['*', '*'],
                  key: ' Формирование аккуратности, дисциплинированности и самостоятельности.',
                },
              ]}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    {item.start.map((star, index) => {
                      return (
                        <Paragraph
                          key={index}
                          flex={2}
                          fontColor="red"
                          text={star}></Paragraph>
                      );
                    })}
                    <Paragraph
                      fontStyle="italic"
                      flex={90}
                      text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            savePdf();
          }}
          style={{
            backgroundColor: CONSTANTS.COLORS.GREEN,
            borderRadius: 100,
            width: isPortrait()
              ? useResponsiveWidth(60)
              : useResponsiveWidth(40),
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: isTabletAndPortrait()
              ? useResponsiveWidth(3)
              : isTabletAndLandScape()
              ? useResponsiveWidth(3)
              : useResponsiveWidth(2),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: useResponsiveHeight(5),
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: isTabletAndPortrait()
                ? useResponsiveFontSize(1.5)
                : isTabletAndLandScape()
                ? useResponsiveFontSize(1.5)
                : useResponsiveFontSize(2),
            }}>
            {t('download_pdf')}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: useResponsiveWidth(90),
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: isPortrait()
              ? useResponsiveHeight(4)
              : useResponsiveHeight(8),
            // backgroundColor : "red"
          }}>
          <TouchableOpacity
            onPress={() => {
              scroll.current.scrollTo({x: 0, y: 0, animated: true});
            }}
            style={{
              marginLeft: 'auto',
              width: useResponsiveWidth(90),
            }}>
            <Text
              style={{
                fontSize: isTabletAndPortrait()
                  ? useResponsiveFontSize(1.5)
                  : isTabletAndLandScape()
                  ? useResponsiveFontSize(1.5)
                  : useResponsiveFontSize(2),
                textAlign: 'right',
                color: CONSTANTS.COLORS.GRAY,
                fontStyle: 'italic',
              }}>
              {t('up')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Lessons')}
            style={{
              marginLeft: 'auto',
              width: isPortrait()
                ? useResponsiveWidth(50)
                : useResponsiveWidth(50),
              marginTop: isPortrait()
                ? useResponsiveHeight(3)
                : useResponsiveHeight(6),
            }}>
            <Text
              style={{
                fontSize: isTabletAndPortrait()
                  ? useResponsiveFontSize(1.5)
                  : isTabletAndLandScape()
                  ? useResponsiveFontSize(1.5)
                  : useResponsiveFontSize(2),
                textAlign: 'right',
                color: CONSTANTS.COLORS.GRAY,
                fontStyle: 'italic',
              }}>
              {t('back_to_topics')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    margin: 5,
  },
});

export default LessonView;

{
  /* {showLoading ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: useResponsiveFontSize(5), color: 'black'}}>
            {t('loading')}
          </Text>
        </View>
      ) : (
        ''
      )} */
}
{
  /* <WebView
        ref={webView}
        textZoom={300}
        onLoad={() => setShowLoading(true)}
        showsVerticalScrollIndicator={false}
        onLoadEnd={() => setShowLoading(false)}
        onError={error => {
          console.log(error);
        }}
        style={{
          // borderStyle : "solid",
          // borderColor : CONSTANTS.COLORS.LIGHT_GRAY,
          // borderWidth : 3,
          width:
            isTablet() && isPortrait()
              ? useResponsiveWidth(95)
              : isPortrait()
              ? useResponsiveWidth(95)
              : Platform.OS === 'android'
              ? useResponsiveWidth(95)
              : useResponsiveWidth(95),
          height: isPortrait()
            ? useResponsiveHeight(55)
            : useResponsiveHeight(45),
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        source={{html: LESSON_HTML}}
        onMessage={handleWebViewMessage}
      /> */
}
