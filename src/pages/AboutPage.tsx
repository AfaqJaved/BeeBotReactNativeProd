import React, {useEffect, useReducer, useTransition} from 'react';
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
  TextInput,
} from 'react-native';
import {AppBar} from '../components/AppBar';
import {BottomBar} from '../components/BottomBar';
import {
  getResponsiveResource,
  isPortrait,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {MenuItem} from '../components/Menu';

import {useResponsiveHeight, useResponsiveWidth} from '../utils/Utils';
import {Accordian} from '../components/Accordian';
import {LayoutWrapper} from '../components/LayoutWrapper';
import {AccordianFields} from '../components/AccordianFields';

import {useTranslation} from 'react-i18next';
import {Heading} from '../components/Heading';
import {Paragraph} from '../components/Paragraph';
import {FieldModel} from '../models/FieldsModel';
import {pageMarginTop} from '../utils/StyleUtils';
import {FIELD_MODELS} from '../data/FieldsData';

import AboutImageMobile from '../assets/img/about_mobile.png';
import AboutImageTablet from '../assets/img/about_tablet.png';
import {AccordianPoints} from '../components/AccordianPoints';
import {ABOUT_HEADING_POINTS} from '../data/AboutData';
import {SubHeading} from '../components/SubHeading';
import {BorderText} from '../components/BorderText';

import ControlAboutMobile from '../assets/img/control_about_mobile.png';
import ControlAboutTablet from '../assets/img/control_about_tablet.png';

import IconMobile from '../assets/img/icon_mobile_mobile.png';
import IconTablet from '../assets/img/icon_mobile_tablet.png';

import ScratchMobile from '../assets/img/scratch_round_mobile.png';
import ScratchTablet from '../assets/img/scratch_round_tablet.png';
import LineText from '../components/LineText';

const AboutPage = ({navigation, route}: any) => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const {t} = useTranslation();
  const model: FieldModel = FIELD_MODELS[0];
  const scrollRef = React.useRef<any>();
  const [showSecond, setShowSecond] = React.useState(false);
  const [showThird, setShowThird] = React.useState(false);
  const [showFifth, setShowFifth] = React.useState(false);
  const [showSixth, setShowSixth] = React.useState(false);

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  const scrollUp = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  console.log(useResponsiveWidth(3));

  return (
    <LayoutWrapper scrollRef={scrollRef} navigation={navigation}>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('Fields')}
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop : pageMarginTop()
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
          {t('back_to_fields')}
        </Text>
      </TouchableOpacity> */}
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: useResponsiveWidth(4),
          marginTop: isPortrait()
            ? useResponsiveWidth(10)
            : useResponsiveWidth(5),
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
          {'Программируемый логобот «Пчёлка»'.toUpperCase()}
        </Text>
      </View>
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: useResponsiveWidth(4),
        }}>
        <Image
          resizeMode="cover"
          style={{
            aspectRatio: 1,
            width: isTabletAndPortrait()
              ? useResponsiveWidth(60)
              : isTabletAndLandScape()
              ? useResponsiveWidth(60)
              : useResponsiveWidth(90),
            borderRadius: 10,
          }}
          source={getResponsiveResource(
            AboutImageMobile,
            AboutImageTablet,
            AboutImageTablet,
          )}></Image>
      </View>
      <View
        style={{
          marginTop: isPortrait()
            ? useResponsiveWidth(10)
            : useResponsiveWidth(5),
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'flex-end',
        }}>
        {/* Main Content */}
        <View>
          <AccordianPoints
            title={ABOUT_HEADING_POINTS.title}
            points={ABOUT_HEADING_POINTS.points}></AccordianPoints>

          <View>
            <TouchableOpacity
              style={{
                marginBottom: isPortrait()
                  ? useResponsiveWidth(2)
                  : useResponsiveWidth(1),
              }}
              onPress={() => setShowSecond(!showSecond)}>
              <Heading
                text={'преимущества и варианты программирования'.toUpperCase()}
                underline={true}></Heading>
            </TouchableOpacity>

            {showSecond ? (
              <View>
                <Paragraph
                  text="Программируемый логобот «Пчёлка» разработан для воспитателей ДОУ и педагогов дополнительного образования. Логобот является одним из средств формирования информационно-коммуникационной грамотности детей дошкольного и младшего школьного возраста.
                  У детей развивается сразу множество навыков. Они привыкают работать с алгоритмами, выполнять последовательные действия, проявлять внимание к деталям стоящей перед ними задачи, а также начинают мыслить более образно. "></Paragraph>
                <BorderText
                  borderColor="#00CA69"
                  text="При помощи кнопок на спинке задается движение робота, траектория движения выстраивается на специальных ковриках."
                  title="Простота использования"></BorderText>
                <BorderText
                  borderColor="#8E59FF"
                  text="При помощи кнопок на спинке задается движение робота, траектория движения выстраивается на специальных ковриках."
                  title="Групповая и индивидуальная работа"></BorderText>
                <BorderText
                  borderColor="#FE6A9A"
                  text={`В помощь педагогу разработано мобильное приложение, где он найдет готовые конспекты занятий на весь период обучения согласно Федеральному государственному образовательному стандарту (ФГОС ДО) и Федеральной образовательной программе (ФОП ДО). Каждый конспект подкрепляется тематическим полем или несколькими полями, которые также идут в комплекте.`}
                  title="Мобильное приложение для педагога"></BorderText>

                <BorderText
                  borderColor="#11D9E5"
                  text={`Мобильное приложение — это основное отличие этого комплекта от прошлых версий напольных роботов.
                  \nДля удобства педагога разработано 3 варианта программирования:`}
                  title="Три варианта программирования">
                  <View
                    style={{
                      marginTop: isPortrait()
                        ? useResponsiveWidth(5)
                        : useResponsiveWidth(2.5),
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        gap: 12,
                        flexWrap: 'wrap',
                      }}>
                      <Image
                        style={{flex: 2, aspectRatio: 1}}
                        source={getResponsiveResource(
                          ControlAboutMobile,
                          ControlAboutTablet,
                          ControlAboutTablet,
                        )}></Image>
                      <View style={{flex: 10}}>
                        <SubHeading text="Кнопки на спинке робота"></SubHeading>
                        <Paragraph text="При помощи кнопок на спинке робота задается необходимый алгоритм движения; траектория движения выстраивается на специальных тематических полях-ковриках."></Paragraph>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      marginTop: isPortrait()
                        ? useResponsiveWidth(5)
                        : useResponsiveWidth(2.5),
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        gap: 12,
                        flexWrap: 'wrap',
                      }}>
                      <Image
                        style={{flex: 2, aspectRatio: 1}}
                        source={getResponsiveResource(
                          IconMobile,
                          IconTablet,
                          IconTablet,
                        )}></Image>
                      <View style={{flex: 10}}>
                        <SubHeading text="Мобильное приложение"></SubHeading>
                        <Paragraph text="Передача отдельных команд при помощи кнопок на точной копии «Пчёлки» в мобильном приложении. "></Paragraph>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      marginTop: isPortrait()
                        ? useResponsiveWidth(5)
                        : useResponsiveWidth(2.5),
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        gap: 12,
                        flexWrap: 'wrap',
                      }}>
                      <Image
                        style={{flex: 2, aspectRatio: 1}}
                        source={getResponsiveResource(
                          ScratchMobile,
                          ScratchTablet,
                          ScratchTablet,
                        )}></Image>
                      <View style={{flex: 10}}>
                        <SubHeading text="Визуальная среда программирования Scratch"></SubHeading>
                        <Paragraph text="Программа строится из цветных блоков-команд"></Paragraph>
                      </View>
                    </View>
                  </View>
                </BorderText>
                <TouchableOpacity
                  onPress={() => {
                    setShowSecond(!showSecond);
                  }}
                  style={{
                    width: useResponsiveWidth(90),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: isPortrait()
                      ? useResponsiveHeight(4)
                      : useResponsiveHeight(8),
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
                    {'↑свернуть'}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              ''
            )}
          </View>

          <View
            style={{
              marginTop: isPortrait()
                ? useResponsiveWidth(10)
                : useResponsiveWidth(5),
            }}>
            <TouchableOpacity
              onPress={() => {
                setShowThird(!showThird);
              }}>
              <Heading
                underline={true}
                text={'Цели и задачи продукта'.toUpperCase()}></Heading>

              {showThird ? (
                <View>
                  <SubHeading text="Целевое назначение:"></SubHeading>
                  <Paragraph text="формирование и поддержка познавательных активностей детей в различных видах деятельности."></Paragraph>
                  <View
                    style={{
                      marginTop: isPortrait()
                        ? useResponsiveWidth(2)
                        : useResponsiveWidth(1),
                      marginBottom: isPortrait()
                        ? useResponsiveWidth(2)
                        : useResponsiveWidth(1),
                    }}>
                    <SubHeading text="Задачи"></SubHeading>
                    {[
                      'Развитие логического мышления.',
                      'Развитие мелкой моторики.',
                      'Развитие умения работать в команде. Развитие коммуникативных навыков.',
                      'Развитие умения составлять алгоритмы (основы программирования). Развитие умения ставить цель и выбирать маршрут движения.',
                      'Развитие пространственной ориентации. Развитие словарного запаса.',
                      'Развитие умения считать.',
                    ].map((point, index) => {
                      return (
                        <View
                          key={index}
                          style={{
                            marginBottom: 10,
                            flexDirection: 'row',
                            gap: useResponsiveWidth(2),
                          }}>
                          <Paragraph
                            flex={isPortrait() ? 5 : 2}
                            text={(index + 1).toString() + '.'}></Paragraph>
                          <Paragraph flex={90} text={point}></Paragraph>
                        </View>
                      );
                    })}

                    <View
                      style={{
                        marginTop: isPortrait()
                          ? useResponsiveWidth(8)
                          : useResponsiveWidth(4),
                      }}>
                      <SubHeading text="Использование «Пчёлки» в образовательной деятельности помогает решать следующие задачи по ФГОС:"></SubHeading>
                    </View>

                    <LineText
                      color="#F8623F"
                      heading="Социально-коммуникативное развитие"
                      text="«Пчелок» можно без проблем использовать при работе в группе! Дети вместе ищут пути решения поставленных задач, в процессе совершенствуя свои навыки общения. Они учатся выявлять лидера, приходить к общим выводам и брать на себя ответственность."
                      number="1"></LineText>

                    <LineText
                      color="#00CA69"
                      heading="Познавательно-речевое развитие"
                      text="Благодаря «Пчёлкам» воспитанники в увлекательной форме работают с алгоритмами. Они привыкают к выполнению последовательных действий, а также учатся мыслить логично. Когнитивные способности совершенствуются с каждым днем таких занятий!"
                      number="2"></LineText>

                    <LineText
                      color="#8E59FF"
                      heading="Художественно-эстетическое развитие"
                      text="«Пчёлки» не только функциональны, но еще и красивы. Дети видят, как в одном предмете сочетаются польза и эстетика, и это отлично влияет на формирование представлений о прекрасном."
                      number="3"></LineText>

                    <LineText
                      color="#11D9E5"
                      heading="Речевое развитие"
                      text="Во время игры педагог обязательно ставит перед детьми конкретную задачу — им важно понять ее точно, поэтому они задают дополнительные вопросы. Также они общаются друг с другом, потому что ищут совместные решения. На занятиях ваши воспитанники постоянно попадают в новые коммуникативные ситуации, а это очень важно для речевого развития."
                      number="4"></LineText>

                    <LineText
                      color="#FE6A9A"
                      heading="Физическое развитие"
                      text="«Пчёлка»-робот активно перемещается в пространстве, а дети задают траекторию движения. Несомненно, это помогает развивать у воспитанников пространственное мышление! Наблюдая за шагами робота, они и сами начинают лучше ориентироваться в пространстве."
                      number="5"></LineText>

                    <TouchableOpacity
                      onPress={() => {
                        setShowThird(!showThird);
                      }}
                      style={{
                        width: useResponsiveWidth(90),
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: isPortrait()
                          ? useResponsiveHeight(4)
                          : useResponsiveHeight(8),
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
                        {'↑свернуть'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                ''
              )}
            </TouchableOpacity>

            <View
              style={{
                marginTop: isPortrait()
                  ? useResponsiveWidth(10)
                  : useResponsiveWidth(5),
              }}>
              <TouchableOpacity
                onPress={() => {
                  setShowFifth(!showFifth);
                }}>
                <Heading
                  underline={true}
                  text={'Какие навыки приобретаются в процессе работы?'.toUpperCase()}></Heading>
              </TouchableOpacity>
              {showFifth ? (
                <View>
                  <Paragraph
                    text="«Пчёлка» вовлекает ребенка в мир творчества, дает стимул для получения новых знаний. Позволяет детям мыслить творчески, анализировать. Логобот позволяет формировать у дошкольников основы элементарного программирования. Развивают навыки ориентации с помощью простейших ориентиров.
Логобот можно использовать с детьми любого возраста. Например, малыши с удовольствием выполняют упражнения физкультминутки с «Пчёлкой», при этом развивая внимание и память. Например, при движении логобота вперед ребята хлопают, при движении назад топают, при поворотах направо и налево поворачивают вслед за ним.
Логобот позволяет повысить эффективность наглядности на занятиях. Малышам легче изучать геометрические фигуры, цвета, животные и птицы. Средние и старшие дошкольники самостоятельно программируют, любят соревноваться.
«Пчёлку» можно использовать для развития творческих способностей детей, например, в театральной деятельности помогает развить творческий потенциал ребенка, усовершенствовать простейшие навыки программирования и создать благоприятный эмоциональный фон."></Paragraph>
                  <View
                    style={{
                      marginTop: isPortrait()
                        ? useResponsiveWidth(3)
                        : useResponsiveWidth(1.5),
                    }}>
                    <SubHeading
                      color="#00CA69"
                      text="Вывод: Логоботы «Пчёлки» прекрасно подходят для работы в детском саду. Они популярны и любимы детьми за простое управление и дружелюбный дизайн. Подходят для детей 3-7 лет. Просты в эксплуатации, безопасны и являются эффективным инструментом для обучения через игру. Они позволяют делать жизнь воспитанников интересной, содержательной, наполненной радостью творчества."></SubHeading>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setShowFifth(!showFifth);
                    }}
                    style={{
                      width: useResponsiveWidth(90),
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: isPortrait()
                        ? useResponsiveHeight(4)
                        : useResponsiveHeight(8),
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
                      {'↑свернуть'}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                ''
              )}
            </View>

            <View
              style={{
                marginTop: isPortrait()
                  ? useResponsiveWidth(10)
                  : useResponsiveWidth(5),
              }}>
              <TouchableOpacity
                onPress={() => {
                  setShowSixth(!showSixth);
                }}>
                <Heading
                  underline={true}
                  text={'Почему педагоги выбирают «Пчёлку»'.toUpperCase()}></Heading>
              </TouchableOpacity>
              {showSixth ? (
                <View>
                  {[
                    'соответствует всем разделам ФГОС;',
                    'не требует от педагогов специальных знаний;',
                    'может быть адаптирована под разные образовательные задачи.',
                  ].map((point, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          marginBottom: 10,
                          flexDirection: 'row',
                          gap: useResponsiveWidth(2),
                        }}>
                        <Paragraph flex={2} text={'\u2022'}></Paragraph>
                        <Paragraph flex={90} text={`${point}`}></Paragraph>
                      </View>
                    );
                  })}
                  <TouchableOpacity
                    onPress={() => {
                      setShowSixth(!showSixth);
                    }}
                    style={{
                      width: useResponsiveWidth(90),
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: isPortrait()
                        ? useResponsiveHeight(4)
                        : useResponsiveHeight(8),
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
                      {'↑свернуть'}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                ''
              )}
            </View>
          </View>
        </View>


      </View>
    </LayoutWrapper>
  );
};

export default AboutPage;
