import React from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {LayoutWrapper} from '../components/LayoutWrapper';
import {
  useResponsiveWidth,
  isPortrait,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
  getResponsiveResource,
  useResponsiveHeight,
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import BeeBotMobile from '../assets/img/beebot_mobile.png';
import BeeBotTablet from '../assets/img/beebot_tablet.png';
import BeeBotMarkedMobile from '../assets/img/beemarked_mobile.png';
import BeeBotMarkedTablet from '../assets/img/beemarked_tablet.png';
import BeeBotBottomMobile from '../assets/img/bee_bottom_mobile.png';
import BeeBotBottomTablet from '../assets/img/bee_bottom_tablet.png';
import PairBeeBotMobile from '../assets/img/pair_beebot_mobile.png';
import PairBeeBotTablet from '../assets/img/pair_beebot_mobile.png';
import TurnBeeBotMobile from '../assets/img/turn_beebot_mobile.png';
import TurnBeeBotTablet from '../assets/img/turn_beebot_tablet.png';
import TurnBeeBotLeftMobile from '../assets/img/turn_left_beebot_mobile.png';
import TurnBeeBotLeftTablet from '../assets/img/turn_left_beebot_tablet.png';
import BeeBotSpeakerMobile from '../assets/img/beebot_speaker_mobile.png';
import BeeBotSpeakerTablet from '../assets/img/beebot_speaker_tablet.png';
import ControlAboutMobile from '../assets/img/control_about_mobile.png';
import ControlAboutTablet from '../assets/img/control_about_tablet.png';
import IconMobile from '../assets/img/icon_mobile_mobile.png';
import IconTablet from '../assets/img/icon_mobile_tablet.png';
import PhoneMobile from '../assets/img/phone_mobile.png';
import PhoneTablet from '../assets/img/phone_tablet.png';
import ScratchMobile from '../assets/img/scratch_round_mobile.png';
import ScratchTablet from '../assets/img/scratch_round_tablet.png';
import ScratchWebMobile from '../assets/img/scratch_web_mobile.png';
import ScratchWebTablet from '../assets/img/scratch_web_tablet.png';

import {
  PanGestureHandler,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {SubHeading} from '../components/SubHeading';
import {Paragraph} from '../components/Paragraph';
import {Heading} from '../components/Heading';
import { useTranslation } from 'react-i18next';

const MaterialPage = ({navigation}: any) => {
  const [showFirst, setShowFirst] = React.useState(false);
  const [showSecond, setShowSecond] = React.useState(false);
  const [showThird, setShowThird] = React.useState(false);
  const [showFourth, setShowFourth] = React.useState(false);
  const [showFifth, setShowFifth] = React.useState(false);
  const [showSixth, setShowSixth] = React.useState(false);
  const [showSeventh, setShowSeventh] = React.useState(false);
  const [panEnabled, setPanEnabled] = React.useState(false);
  const scale = React.useRef(new Animated.Value(1)).current;
  const translateX = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(0)).current;
  const pinchRef = React.createRef();
  const panRef = React.createRef();
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);
  const {t} = useTranslation();

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: {scale},
      },
    ],
    {useNativeDriver: true},
  );

  const onPanEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const handlePinchStateChange = ({nativeEvent}: any) => {
    // enabled pan only after pinch-zoom
    if (nativeEvent.state === State.ACTIVE) {
      setPanEnabled(true);
    }

    // when scale < 1, reset scale back to original (1)
    const nScale = nativeEvent.scale;
    if (nativeEvent.state === State.END) {
      if (nScale < 1) {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();

        setPanEnabled(false);
      }
    }
  };

  React.useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  console.log(useResponsiveWidth(7));
  return (
    <LayoutWrapper navigation={navigation}>
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: useResponsiveWidth(7),
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
          {'Руководство\nпользователя'.toUpperCase()}
        </Text>
      </View>

      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <PanGestureHandler
          onGestureEvent={onPanEvent}
          ref={panRef}
          simultaneousHandlers={[pinchRef]}
          enabled={panEnabled}
          failOffsetX={[-1000, 1000]}
          shouldCancelWhenOutside>
          <Animated.View>
            <PinchGestureHandler
              ref={pinchRef}
              onGestureEvent={onPinchEvent}
              simultaneousHandlers={[panRef]}
              onHandlerStateChange={handlePinchStateChange}>
              <Animated.Image
                source={getResponsiveResource(
                  BeeBotMobile,
                  BeeBotTablet,
                  BeeBotTablet,
                )}
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  transform: [{scale}, {translateX}, {translateY}],
                }}
                resizeMode="contain"
              />
            </PinchGestureHandler>
          </Animated.View>
        </PanGestureHandler>
      </View>

      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: isPortrait()
            ? useResponsiveWidth(10)
            : useResponsiveWidth(5),
        }}>
        <View
          style={{
            marginBottom: isPortrait()
              ? useResponsiveWidth(2)
              : useResponsiveWidth(1),
          }}>
          <SubHeading
            fontWeight="700"
            text="«Пчёлка» — это напольный робот для обучения детей основам программирования и алгоритмики. "></SubHeading>
        </View>
        <View
          style={{
            marginBottom: isPortrait()
              ? useResponsiveWidth(2)
              : useResponsiveWidth(1),
          }}>
          <Paragraph text="«Пчёлка» имеет дружелюбный вид и легко вписывается в обучающую, воспитательную и игровую деятельность детей от 3 до 7 лет. Управлять логоботом можно кнопками на спинке робота, через мобильное приложение «Пчёлка» или с помощью среды программирования Scratch на планшете (на телефоне не поддерживается)."></Paragraph>
        </View>
        <View
          style={{
            marginBottom: isPortrait()
              ? useResponsiveWidth(2)
              : useResponsiveWidth(1),
          }}>
          <Paragraph text="Мобильное приложение — это основное отличие «Пчёлки» от существующих версий напольных роботов. В приложении собраны конспекты уроков, которые помогут педагогам выстроить обучающий процесс с использованием логобота. "></Paragraph>
        </View>
      </View>

      {/* Main Content */}

      {/* Heading One Start */}
      <View>
        <View
          style={{
            width: useResponsiveWidth(90),
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: isPortrait()
              ? useResponsiveWidth(10)
              : useResponsiveWidth(5),
          }}>
          <TouchableOpacity
            onPress={() => {
              setShowFirst(!showFirst);
            }}>
            <Heading
              underline
              text={'Внешний вид и элементы управления'.toUpperCase()}></Heading>
          </TouchableOpacity>

          {showFirst ? (
            <View>
              <View>
                <View
                  style={{
                    marginBottom: isPortrait()
                      ? useResponsiveWidth(2)
                      : useResponsiveWidth(1),
                  }}>
                  <Paragraph text="Мобильное приложение — это основное отличие «Пчёлки» от существующих версий напольных роботов. В приложении собраны конспекты уроков, которые помогут педагогам выстроить обучающий процесс с использованием логобота. "></Paragraph>
                </View>
                <View
                  style={{
                    marginBottom: isPortrait()
                      ? useResponsiveWidth(2)
                      : useResponsiveWidth(1),
                  }}>
                  <Paragraph text="На передней стороне «Пчёлки» — 2 глаза со светодиодами. На спинке — 7 кнопок для программирования робота. На нижней поверхности — другие элементы управления. Робот имеет 2 колеса, которые встроены внутрь корпуса и видны на нижней поверхности.  "></Paragraph>
                </View>
              </View>

              <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(10)
                    : useResponsiveWidth(5),
                }}>
                <Image
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: isPortrait()
                      ? useResponsiveWidth(5)
                      : useResponsiveWidth(2.5),
                  }}
                  source={getResponsiveResource(
                    BeeBotMarkedMobile,
                    BeeBotMarkedTablet,
                    BeeBotMarkedTablet,
                  )}></Image>

                <FlatList
                  scrollEnabled={false}
                  data={[
                    {
                      key: 'Глаза робота со встроенными программируемыми светодиодами',
                    },
                    {
                      key: 'Кнопка записи команды «Вперед»',
                    },
                    {
                      key: 'Кнопка «Старт» для запуска введенных команд.',
                    },
                    {key: 'Кнопка записи команды «Поворот налево»'},
                    {
                      key: 'Кнопка удаления всех записанных команд',
                    },
                    {
                      key: 'Кнопка записи команды «Назад».',
                    },
                    {
                      key: 'Кнопка записи команды «Пауза» (добавляет паузу на 2 секунды перед исполнением следующей команды).',
                    },
                    {
                      key: 'Кнопка записи команды «Поворот направо».',
                    },
                    {
                      key: 'Крюк для полезной нагрузки робота.',
                    },
                  ]}
                  renderItem={({item, index}: any) => {
                    return (
                      <View
                        style={{
                          marginBottom: 10,
                          flexDirection: 'row',
                          gap: useResponsiveWidth(2),
                        }}>
                        <Paragraph
                          flex={4}
                          text={(index + 1 + '.').toString()}></Paragraph>
                        <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                      </View>
                    );
                  }}
                />
              </View>

              {/* Border */}

              <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginTop: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}></View>

              <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}>
                <Image
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: isPortrait()
                      ? useResponsiveWidth(5)
                      : useResponsiveWidth(2.5),
                  }}
                  source={getResponsiveResource(
                    BeeBotBottomMobile,
                    BeeBotBottomTablet,
                    BeeBotBottomTablet,
                  )}></Image>

                <FlatList
                  scrollEnabled={false}
                  data={[
                    {
                      key: 'Отсек для аккумулятора 3.7В.',
                    },
                    {
                      key: 'Разъем для зарядки',
                    },
                    {
                      key: 'Инфракрасный приемник для общения роботов',
                    },
                    {key: 'Инфракрасный передатчик для общения роботов'},
                    {
                      key: 'Включение робота. При включении глаза робота загорятся зеленым.',
                    },
                    {
                      key: 'Включение динамика',
                    },
                    {
                      key: 'Включение инфракрасного приемника',
                    },
                  ]}
                  renderItem={({item, index}: any) => {
                    return (
                      <View
                        style={{
                          marginBottom: 10,
                          flexDirection: 'row',
                          gap: useResponsiveWidth(2),
                        }}>
                        <Paragraph
                          flex={4}
                          text={(index + 1 + '.').toString()}></Paragraph>
                        <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                      </View>
                    );
                  }}
                />
              </View>
              <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginTop: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}></View>

              <TouchableOpacity
                onPress={() => setShowFirst(!showFirst)}
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(4)
                    : useResponsiveWidth(2),
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
      {/* Heading one End */}

      {/* Heading Two Start */}
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: isPortrait()
            ? useResponsiveWidth(8)
            : useResponsiveWidth(4),
        }}>
        <TouchableOpacity onPress={() => setShowSecond(!showSecond)}>
          <Heading underline text={'Движение логобота'.toUpperCase()}></Heading>
        </TouchableOpacity>
        {showSecond ? (
          <View>
            <FlatList
              scrollEnabled={false}
              data={[
                {
                  key: '«Пчёлка» понимает 6 различных команд: вперёд, назад, налево, направо, пауза, старт.',
                },
                {
                  key: 'При исполнении команд «Вперед» и «Назад» робот линейно перемещается на 15 см',
                },
                {
                  key: 'Команды «Поворот налево» и «Поворот направо» приведут к повороту робота на 90 градусов в заданную сторону',
                },
                {
                  key: 'Команда «Пауза» добавляет паузу на 2 секунды перед исполнением следующей команды.',
                },
                {
                  key: 'Кнопка «Старт» запускает введенные команды.',
                },
                {
                  key: 'Объем памяти позволяет задать и сохранить последовательность из 500 и более команд',
                },
                {
                  key: 'Кнопка удаления всех записанных команд очистит память робота и «Пчёлка» будет готова к новой последовательности команд.',
                },
              ]}
              renderItem={({item, index}: any) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                      gap: useResponsiveWidth(2),
                    }}>
                    <Paragraph
                      flex={4}
                      text={(index + 1 + '.').toString()}></Paragraph>
                    <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />

            <View
              style={{
                width: useResponsiveWidth(90),
                marginTop: isPortrait()
                  ? useResponsiveWidth(10)
                  : useResponsiveWidth(5),
              }}>
              <Image
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}
                source={getResponsiveResource(
                  PairBeeBotMobile,
                  PairBeeBotTablet,
                  PairBeeBotTablet,
                )}></Image>
              <Paragraph
                textAlign="center"
                text="При исполнении команд «Вперед» и «Назад» робот перемещается на 15 см"></Paragraph>
              <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginTop: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}></View>

              <Image
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(10)
                    : useResponsiveWidth(5),
                  marginBottom: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}
                source={getResponsiveResource(
                  TurnBeeBotMobile,
                  TurnBeeBotTablet,
                  TurnBeeBotTablet,
                )}></Image>

              <Image
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(10)
                    : useResponsiveWidth(5),
                  marginBottom: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}
                source={getResponsiveResource(
                  TurnBeeBotLeftMobile,
                  TurnBeeBotLeftTablet,
                  TurnBeeBotLeftTablet,
                )}></Image>

              <Paragraph
                textAlign="center"
                text="Команды «Поворот налево» и «Поворот направо» приведут к повороту робота на 90 градусов в заданную сторону."></Paragraph>

              <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginTop: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}></View>

              <TouchableOpacity
                onPress={() => setShowSecond(!showSecond)}
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(10)
                    : useResponsiveWidth(5),
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
      </View>
      {/* Heading Tow End */}

      {/* Heading Three Start  */}
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: isPortrait()
            ? useResponsiveWidth(8)
            : useResponsiveWidth(4),
        }}>
        <TouchableOpacity onPress={() => setShowThird(!showThird)}>
          <Heading
            underline
            text={'ИК сенсоры для общения логоботов'.toUpperCase()}></Heading>
        </TouchableOpacity>
        {showThird ? (
          <View>
            <Paragraph
              text={`«Пчёлки» могут общаться.\n
Для этого каждый робот оснащён ИК сенсорами: приемником и передатчиком. Их включение и выключения осуществляется с помощью переключателя на нижней поверхности.\n
ИК передатчик отправляет сигнал каждые 5 секунд. При каждом получении сообщения робот будет моргать глазами и издавать звук.`}
            />
            <View
              style={{
                width: useResponsiveWidth(90),
                marginTop: isPortrait()
                  ? useResponsiveWidth(5)
                  : useResponsiveWidth(2.5),
              }}>
              <Image
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}
                source={getResponsiveResource(
                  BeeBotSpeakerMobile,
                  BeeBotSpeakerTablet,
                  BeeBotSpeakerTablet,
                )}></Image>
              <Paragraph
                textAlign="center"
                text="Логобот 1 передает сообщение.Логобот 2 принимает сообщение (моргает глазами, издает звук)."></Paragraph>
              {/* <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginTop: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}></View> */}

              <TouchableOpacity
                onPress={() => setShowThird(!showThird)}
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(4)
                    : useResponsiveWidth(2),
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
      </View>
      {/* Heading Three End */}

      {/* Heading Four Start  */}
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: isPortrait()
            ? useResponsiveWidth(8)
            : useResponsiveWidth(4),
        }}>
        <TouchableOpacity onPress={() => setShowFourth(!showFourth)}>
          <Heading underline text={'Динамики'.toUpperCase()}></Heading>
        </TouchableOpacity>
        {showFourth ? (
          <View>
            <Paragraph
              text={`Робот имеет встроенный динамик для звукового сопровождения следующих событий:`}
            />
            <View
              style={{
                width: useResponsiveWidth(90),
                marginTop: isPortrait()
                  ? useResponsiveWidth(5)
                  : useResponsiveWidth(2.5),
              }}>
              <FlatList
                scrollEnabled={false}
                data={[
                  {
                    key: 'Запись команды в память.',
                  },
                  {
                    key: 'Завершение исполнения введенных команд',
                  },
                  {
                    key: 'Прием роботом ИК сигнала',
                  },
                  {
                    key: 'Звуковое сопровождение можно включить или отключить с помощью переключателя на нижней поверхности робота.',
                  },
                ]}
                renderItem={({item, index}: any) => {
                  return (
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        gap: useResponsiveWidth(2),
                      }}>
                      <Paragraph
                        flex={4}
                        text={(index + 1 + '.').toString()}></Paragraph>
                      <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                    </View>
                  );
                }}
              />

              {/* <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginTop: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}></View> */}

              <TouchableOpacity
                onPress={() => setShowFourth(!showFourth)}
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(4)
                    : useResponsiveWidth(2),
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
      </View>
      {/* Heading End End */}

      {/* Heading Fifth Start  */}
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: isPortrait()
            ? useResponsiveWidth(8)
            : useResponsiveWidth(4),
        }}>
        <TouchableOpacity onPress={() => setShowFifth(!showFifth)}>
          <Heading
            underline
            text={'Программирование «Пчёлки»'.toUpperCase()}></Heading>
        </TouchableOpacity>
        {showFifth ? (
          <View
            style={{
              width: useResponsiveWidth(90),
              marginTop: isPortrait()
                ? useResponsiveWidth(5)
                : useResponsiveWidth(2.5),
            }}>
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
                  style={{
                    aspectRatio: 1,
                    width: isPortrait()
                      ? useResponsiveWidth(12)
                      : useResponsiveWidth(6),
                  }}
                  source={getResponsiveResource(
                    ControlAboutMobile,
                    ControlAboutTablet,
                    ControlAboutTablet,
                  )}></Image>
                <View style={{flex: 10}}>
                  <SubHeading
                    fontWeight={'bold'}
                    text="Кнопки на спинке робота"></SubHeading>
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
                  style={{
                    aspectRatio: 1,
                    width: isPortrait()
                      ? useResponsiveWidth(12)
                      : useResponsiveWidth(6),
                  }}
                  source={getResponsiveResource(
                    IconMobile,
                    IconTablet,
                    IconTablet,
                  )}></Image>
                <View style={{flex: 10}}>
                  <SubHeading
                    fontWeight={'bold'}
                    text="Мобильное приложение"></SubHeading>
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
                  style={{
                    aspectRatio: 1,
                    width: isPortrait()
                      ? useResponsiveWidth(12)
                      : useResponsiveWidth(6),
                  }}
                  source={getResponsiveResource(
                    ScratchTablet,
                    ScratchTablet,
                    ScratchTablet,
                  )}></Image>
                <View style={{flex: 10}}>
                  <SubHeading
                    fontWeight={'bold'}
                    text="Визуальная среда программирования Scratch"></SubHeading>
                  <Paragraph text="Программа строится из цветных блоков-команд"></Paragraph>
                </View>
              </View>

              {/* <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginTop: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}></View> */}
            </View>

            <View
              style={{
                marginTop: isPortrait()
                  ? useResponsiveWidth(8)
                  : useResponsiveWidth(4),
              }}>
              <SubHeading
                fontWeight="700"
                text={'Дистанционное управление в мобильном приложении'.toUpperCase()}></SubHeading>
              <Paragraph text="Передача отдельных команд при помощи кнопок на точной копии «Пчелки» в мобильном приложении. Приложение не позволяет создавать алгоритм, то есть непрерывную последовательность движения. Возможно выполнение только отдельных команд."></Paragraph>
            </View>

            <Image
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: isPortrait()
                  ? useResponsiveWidth(5)
                  : useResponsiveWidth(2.5),
              }}
              source={getResponsiveResource(
                PhoneMobile,
                PhoneTablet,
                PhoneTablet,
              )}></Image>

            <FlatList
              style={{
                marginTop: isPortrait()
                  ? useResponsiveWidth(5)
                  : useResponsiveWidth(2.5),
              }}
              scrollEnabled={false}
              data={[
                {
                  key: 'Убедитесь, что на вашем мобильном телефоне включены службы определения местоположения (локация),  активны Bluetooth, Wi-Fi.',
                },
                {
                  key: 'Включите робота, его глаза загорятся зеленым светом.',
                },
                {
                  key: 'Откройте приложение и дайте ему разрешение на определение местоположения. Запрос открывается автоматически.',
                },
                {
                  key: 'Нажмите на значок Bluetooth (1) в правом верхнем углу экрана. При открытии диалогового окна нажмите на иконку сканирования (2)',
                },
                {
                  key: 'При успешном соединении глаза робота станут синими.',
                },
                {
                  key: 'Перейдите в пункт меню «Дистанционное управление».',
                },
              ]}
              renderItem={({item, index}: any) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                      gap: useResponsiveWidth(2),
                    }}>
                    <Paragraph
                      flex={4}
                      text={(index + 1 + '.').toString()}></Paragraph>
                    <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                  </View>
                );
              }}
            />

            <View
              style={{
                marginTop: isPortrait()
                  ? useResponsiveWidth(8)
                  : useResponsiveWidth(4),
              }}>
              <SubHeading
                text={'Программирование в визуальной среде Scratch (доступно на планшете)'.toUpperCase()}
                fontWeight="700"></SubHeading>
              <FlatList
                scrollEnabled={false}
                data={[
                  {
                    key: 'Перед началом работы убедитесь, что ваша «Пчелка» включена (глаза горят зеленым светом), на планшете активны Bluetooth, Wi-Fi, служба определения местоположения (локация), выиспользуете браузер Google Chrome.',
                  },
                  {
                    key: 'Для работы в Scratch необходимо нажать на соответствующий пункт меню в приложении. Приложение перенаправит вас по ссылке scratch.technoedu.ru в Google Chrome.',
                  },
                  {
                    key: 'В Scratch добавьте расширение, нажав на кнопку «Добавить расширение» внижнем левом углу (1).',
                  },
                  {
                    key: 'Выберете расширение «LogoBot Scratch Extension» (2).',
                  },
                  {
                    key: 'После загрузки расширения появится всплывающее диалоговое окно сдоступными устройствами, в том числе Logobot. Нажмите на него, азатем на кнопку создания пары (pair). Диалоговое окно закроется автоматически',
                  },
                  {
                    key: 'Если глаза робота поменяли цвет сзеленого на синий, то «Пчёлка» готова кработе.',
                  },
                  {
                    key: 'Для отключения робота от Scratch просто закройте браузер. После этого его глаза снова станут зелеными.',
                  },
                  {
                    key: 'Обратите внимание! Приложение «Пчёлка» и Scratch поддерживают соединение Bluetooth отдельно. Если первоначально логобот был подключен к приложению и его глаза были синими, то при переходе в Scratch, они снова станут зелеными. Таким образом логобот готов к подключению в Scratch среде. ',
                  },
                ]}
                renderItem={({item, index}: any) => {
                  return (
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        gap: useResponsiveWidth(2),
                      }}>
                      <Paragraph
                        flex={4}
                        text={(index + 1 + '.').toString()}></Paragraph>
                      <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                    </View>
                  );
                }}
              />
              <Image
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(4)
                    : useResponsiveWidth(2),
                }}
                source={getResponsiveResource(
                  ScratchWebMobile,
                  ScratchWebTablet,
                  ScratchWebTablet,
                )}></Image>

              <TouchableOpacity
                onPress={() => setShowFifth(!showFifth)}
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(4)
                    : useResponsiveWidth(2),
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
      </View>
      {/* Heading Fifth End */}

      {/* Heading Sixth Start  */}
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: isPortrait()
            ? useResponsiveWidth(8)
            : useResponsiveWidth(4),
        }}>
        <TouchableOpacity onPress={() => setShowSixth(!showSixth)}>
          <Heading underline text={'Зарядка логобота'.toUpperCase()}></Heading>
        </TouchableOpacity>
        {showSixth ? (
          <View>
            <Paragraph
              text={`Зарядка логобота осуществляется двумя вариантами:.
              `}
            />
            <View
              style={{
                width: useResponsiveWidth(90),
              }}>
              <FlatList
                scrollEnabled={false}
                data={[
                  {
                    key: 'через usb кабель тип b (в комплект не входит);',
                  },
                  {
                    key: 'с помощью док-станции при покупке комплекта из  шести «Пчёлок»',
                  },
                ]}
                renderItem={({item, index}: any) => {
                  return (
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        gap: useResponsiveWidth(2),
                      }}>
                      <Paragraph
                        flex={4}
                        text={(index + 1 + '.').toString()}></Paragraph>
                      <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                    </View>
                  );
                }}
              />

              <Paragraph
                text={`При подключении питания глаза логобота загораются красным. Когда робот полностью заряжен, глаза становятся зелеными.  `}
              />

              {/* <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginTop: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}></View> */}

              <TouchableOpacity
                onPress={() => setShowSixth(!showSixth)}
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(4)
                    : useResponsiveWidth(2),
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
      </View>
      {/* Heading Sixth End */}

      {/* Heading Seventh Start  */}
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: isPortrait()
            ? useResponsiveWidth(8)
            : useResponsiveWidth(4),
        }}>
        <TouchableOpacity onPress={() => setShowSeventh(!showSeventh)}>
          <Heading
            underline
            text={'Обновление логобота'.toUpperCase()}></Heading>
        </TouchableOpacity>
        {showSeventh ? (
          <View>
            <Paragraph
              text={`Программное обеспечение робота обновляется с помощью точки доступа в настройках вашего телефона или планшета.
              `}
            />
            <View
              style={{
                width: useResponsiveWidth(90),
                marginTop: isPortrait()
                  ? useResponsiveWidth(5)
                  : useResponsiveWidth(2.5),
              }}>
              <FlatList
                scrollEnabled={false}
                data={[
                  {
                    key: 'Включите логобота, его глаза будут гореть зеленым.',
                  },
                  {
                    key: 'Включите точку доступа на вашем устройстве, передвинув ползунок вактивной положение. ',
                  },
                  {
                    key: 'Измените настройки своей точки доступа на следующие: SSID (имя сети): adminPASSWORD (пароль): adminadmin',
                  },
                  {
                    key: 'Затем нажмите и удерживайте кнопку «Старт» на спинке логобота в течение 5секунд, пока глаза робота незагорятся красным.',
                  },
                  {
                    key: 'Отпустите кнопку, при удачном подключении к точке доступа глаза робота станут синими и запустится процесс обновления. Он занимает от3до 7 минут. После успешного обновления глаза станут зелеными.',
                  },
                  {
                    key: 'После обновления логобота рекомендовано обновить приложение.',
                  },
                ]}
                renderItem={({item, index}: any) => {
                  return (
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        gap: useResponsiveWidth(2),
                      }}>
                      <Paragraph
                        flex={4}
                        text={(index + 1 + '.').toString()}></Paragraph>
                      <Paragraph flex={90} text={`${item.key}`}></Paragraph>
                    </View>
                  );
                }}
              />

              {/* <View
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginTop: isPortrait()
                    ? useResponsiveWidth(5)
                    : useResponsiveWidth(2.5),
                }}></View> */}

              <TouchableOpacity
                onPress={() => setShowSeventh(!showSeventh)}
                style={{
                  width: useResponsiveWidth(90),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: isPortrait()
                    ? useResponsiveWidth(4)
                    : useResponsiveWidth(2),
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
      </View>
      {/* Heading Sixth End */}

      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: isPortrait()
            ? useResponsiveWidth(8)
            : useResponsiveWidth(4),
        }}>
          <TouchableOpacity
          onPress={() => {
            // savePdf();
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
              ? useResponsiveWidth(2)
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


        </View>
    </LayoutWrapper>
  );
};

export default MaterialPage;
