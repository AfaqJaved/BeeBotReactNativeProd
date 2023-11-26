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
} from 'react-native';
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
import {
  BEEBOT_HTML_PROGRAM_MODE,
  BEEBOT_HTML_REMOTE,
} from '../constants/BeeBot';
import {LayoutWrapper} from '../components/LayoutWrapper';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducer} from '../redux/Store';
import {INCREMENT} from '../redux/Actions';
import base64 from 'react-native-base64';
import Card, {Commands} from '../components/Card';
import {Paragraph} from '../components/Paragraph';
import Forward from '../assets/img/forward_desktop.png';
import Left from '../assets/img/left_desktop.png';
import Right from '../assets/img/right_desktop.png';
import Back from '../assets/img/back_desktop.png';
import Pause from '../assets/img/pause.png';

enum MODE {
  REMOTE,
  PROGRAM,
}

let data = () => {
  let result = [];
  for (let x = 0; x < 30; x++) {
    result.push({
      empty: true,
      command: Commands.NULL,
      image: null,
      index: x + 1,
    });
  }
  return result;
};

const ControlPage = ({navigation}: any) => {
  const [currentMode, setCurrentMode] = React.useState<MODE>(MODE.REMOTE);
  const [showLoading, setShowLoading] = React.useState(true);
  const [commands, setCommands] = React.useState<Card[]>(data);
  const [index, setIndex] = React.useState(1);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const {t} = useTranslation();
  const char = useSelector((state: RootReducer) => state.bleReducer.char);
  const refScrollView = React.useRef<any>();

  const moveTo = (x: number) => {
    refScrollView.current.scrollTo({x});
  };

  React.useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  const handleWebViewMessageForRemote = async (event: any) => {
    const message = event.nativeEvent.data;
    console.log(message);

    if (char != null) await char.writeWithoutResponse(base64.encode(message));
  };

  const handleWebViewMessageForProgramMode = async (event: any) => {
    const message = event.nativeEvent.data;
    console.log(message);

    if (index > 3) {
      moveTo(50 * index);
    }

    if (index > 8) {
      moveTo(70 * index);
    }

    if (index > 16) {
      moveTo(80 * index);
    }

    if (index > 32) {
      moveTo(90 * index);
    }

    console.log(index);

    switch (message) {
      case 'f': {
        let updatedCommands = commands.map(command => {
          if (command.index === index) {
            command.empty = false;
            command.image = Forward;
            command.command = Commands.F;
          }
          return command;
        });
        setCommands(updatedCommands);
        setIndex(index + 1);
        break;
      }
      case 'b': {
        let updatedCommands = commands.map(command => {
          if (command.index === index) {
            command.empty = false;
            command.image = Back;
            command.command = Commands.B;
          }
          return command;
        });
        setCommands(updatedCommands);
        setIndex(index + 1);
        break;
      }
      case 'l': {
        let updatedCommands = commands.map(command => {
          if (command.index === index) {
            command.empty = false;
            command.image = Left;
            command.command = Commands.L;
          }
          return command;
        });
        setCommands(updatedCommands);
        setIndex(index + 1);
        break;
      }
      case 'r': {
        let updatedCommands = commands.map(command => {
          if (command.index === index) {
            command.empty = false;
            command.image = Right;
            command.command = Commands.R;
          }
          return command;
        });
        setCommands(updatedCommands);
        setIndex(index + 1);
        break;
      }

      case 'p': {
        let updatedCommands = commands.map(command => {
          if (command.index === index) {
            command.empty = false;
            command.image = Pause;
            command.command = Commands.P;
          }
          return command;
        });
        setCommands(updatedCommands);
        setIndex(index + 1);
        break;
      }
      case 'c': {
        let updatedCommands = commands.map(command => {
          command.image = null;
          command.empty = true;
          command.command = Commands.NULL;
          return command;
        });
        console.log(updatedCommands);
        setCommands(updatedCommands);
        setIndex(1);
        moveTo(0);
        break;
      }

      case 'g': {
        commands.forEach(async command => {
          switch (command.command) {
            case Commands.F: {
              if (char != null)
                await char.writeWithoutResponse(base64.encode('f'));
              break;
            }
            case Commands.B: {
              if (char != null)
                await char.writeWithoutResponse(base64.encode('b'));
              break;
            }
            case Commands.L: {
              if (char != null)
                await char.writeWithoutResponse(base64.encode('l'));
              break;
            }
            case Commands.R: {
              if (char != null)
                await char.writeWithoutResponse(base64.encode('r'));
              break;
            }
            case Commands.P: {
              if (char != null)
                await char.writeWithoutResponse(base64.encode('p'));
              break;
            }
            default: {
              break;
            }
          }
        });
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <LayoutWrapper enableScroll={true} navigation={navigation}>
      {showLoading ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: useResponsiveFontSize(5), color: 'black'}}>
            {t('loading')}
          </Text>
        </View>
      ) : (
        ''
      )}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'center',
          gap: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            setCurrentMode(MODE.REMOTE);
          }}
          style={{
            backgroundColor:
              currentMode === MODE.REMOTE ? CONSTANTS.COLORS.GREEN : 'white',
            borderRadius: 3,
            borderWidth: 1,
            borderColor:
              currentMode === MODE.REMOTE ? 'white' : CONSTANTS.COLORS.GRAY,
            marginTop: isPortrait()
              ? useResponsiveHeight(2)
              : useResponsiveHeight(2),
            width: isPortrait()
              ? useResponsiveWidth(45)
              : useResponsiveWidth(30),
            padding: isTabletAndPortrait()
              ? useResponsiveWidth(3)
              : isTabletAndLandScape()
              ? useResponsiveWidth(1)
              : useResponsiveWidth(1.5),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color:
                currentMode === MODE.REMOTE ? 'white' : CONSTANTS.COLORS.GRAY,
              fontSize: isTabletAndPortrait()
                ? useResponsiveFontSize(1.5)
                : isTabletAndLandScape()
                ? useResponsiveFontSize(1.5)
                : useResponsiveFontSize(2),
            }}>
            {'управление'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentMode(MODE.PROGRAM);
          }}
          style={{
            backgroundColor:
              currentMode === MODE.PROGRAM ? CONSTANTS.COLORS.GREEN : 'white',
            borderRadius: 3,
            borderWidth: 1,
            borderColor:
              currentMode === MODE.PROGRAM ? 'white' : CONSTANTS.COLORS.GRAY,
            marginTop: isPortrait()
              ? useResponsiveHeight(2)
              : useResponsiveHeight(2),
            width: isPortrait()
              ? useResponsiveWidth(45)
              : useResponsiveWidth(30),
            padding: isTabletAndPortrait()
              ? useResponsiveWidth(3)
              : isTabletAndLandScape()
              ? useResponsiveWidth(1)
              : useResponsiveWidth(1),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color:
                currentMode === MODE.PROGRAM ? 'white' : CONSTANTS.COLORS.GRAY,
              fontSize: isTabletAndPortrait()
                ? useResponsiveFontSize(1.5)
                : isTabletAndLandScape()
                ? useResponsiveFontSize(1.5)
                : useResponsiveFontSize(2),
            }}>
            {'программирование'}
          </Text>
        </TouchableOpacity>
      </View>
      {currentMode === MODE.REMOTE ? (
        <>
          <WebView
            // injectedJavaScript={JAVASCRIPT_BEEBOT}
            onLoad={() => setShowLoading(true)}
            onLoadEnd={() => setShowLoading(false)}
            style={{
              width:
                isTablet() && isPortrait()
                  ? useResponsiveWidth(70)
                  : isPortrait()
                  ? useResponsiveWidth(90)
                  : Platform.OS === 'android'
                  ? useResponsiveWidth(20)
                  : useResponsiveWidth(25),
              height: isPortrait()
                ? useResponsiveHeight(75)
                : useResponsiveHeight(60),
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            source={{html: BEEBOT_HTML_REMOTE}}
            onMessage={handleWebViewMessageForRemote}
          />
        </>
      ) : (
        <>
          <WebView
            // injectedJavaScript={JAVASCRIPT_BEEBOT}
            onLoad={() => setShowLoading(true)}
            onLoadEnd={() => setShowLoading(false)}
            style={{
              width:
                isTablet() && isPortrait()
                  ? useResponsiveWidth(70)
                  : isPortrait()
                  ? useResponsiveWidth(90)
                  : Platform.OS === 'android'
                  ? useResponsiveWidth(40)
                  : useResponsiveWidth(25),
              height: isPortrait()
                ? useResponsiveHeight(45)
                : useResponsiveHeight(80),
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: useResponsiveHeight(3),
            }}
            source={{html: BEEBOT_HTML_PROGRAM_MODE}}
            onMessage={handleWebViewMessageForProgramMode}
          />

          <View
            style={{
              // backgroundColor: 'red',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: useResponsiveHeight(6),
              display: 'flex',
              flexDirection: 'row',
              gap: useResponsiveWidth(1.5),
            }}>
            <ScrollView
              ref={refScrollView}
              horizontal
              showsVerticalScrollIndicator>
              {commands.map((command, index) => {
                return (
                  <Card
                    onDelete={() => {
                      setCommands(
                        commands.filter(com => com.index != command.index),
                      );
                    }}
                    command={command.command}
                    key={index}
                    index={++index}
                    empty={command.empty}
                    image={command.image}></Card>
                );
              })}
            </ScrollView>
          </View>
          <View style={{marginTop: useResponsiveHeight(2)}}>
            <Paragraph
              textAlign="center"
              text="Для запуска алгоритма нажмите «Старт» на спинке виртуальной Пчёлки"></Paragraph>
          </View>
        </>
      )}
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

export default ControlPage;
