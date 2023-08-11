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
} from 'react-native';
import Share from 'react-native-share';
import {AppBar} from '../components/AppBar';
import {
  isTablet,
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
  React.useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  const handleWebViewMessage = async (event: any) => {
    const message = event.nativeEvent.data;
    console.log(message);
    if (message == 'b') {
    }
  };

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
    <LayoutWrapper enableScroll={false} navigation={navigation}>
      <TouchableOpacity
        onPress={async () => {}}
        style={{
          position: 'relative',
          bottom: isPortrait() ? 10 : 0,
          zIndex: 3,
          width: isPortrait() ? useResponsiveWidth(90) : useResponsiveWidth(50),
          marginTop: isPortrait() ? useResponsiveWidth(3) : 0,
        }}>
        <Text
          style={{
            fontSize: useResponsiveFontSize(2),
            width: useResponsiveWidth(90),
            textAlign: 'right',
            color: CONSTANTS.COLORS.GRAY,
            fontStyle: 'italic',
          }}>
          {t('back_to_topics')}
        </Text>
      </TouchableOpacity>
      {showLoading ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: useResponsiveFontSize(5), color: 'black'}}>
            {t('loading')}
          </Text>
        </View>
      ) : (
        ''
      )}
      <WebView
        ref={webView}
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
      />

      <TouchableOpacity
        onPress={() => {savePdf()}}
        style={{
          backgroundColor: CONSTANTS.COLORS.GREEN,
          borderRadius: 20,
          width: isPortrait() ? useResponsiveWidth(40) : useResponsiveWidth(20),
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          position : "relative",
          zIndex : 10,
          top: isPortrait() ? useResponsiveHeight(5) : 0,
        }}>
        <Text style={{color: 'white'}}>{t("download_pdf")}</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: isPortrait() ? 'column' : 'column',
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          top: isPortrait()
            ? useResponsiveHeight(-2)
            : useResponsiveHeight(-15),
        }}>
        <TouchableOpacity
          onPress={() => {
            webView.current.postMessage('scroll');
          }}
          style={{
            marginLeft: 'auto',
            width: isPortrait()
              ? useResponsiveWidth(20)
              : useResponsiveWidth(50),
          }}>
          <Text
            style={{
              fontSize: useResponsiveFontSize(2),
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
              ? useResponsiveWidth(25)
              : useResponsiveWidth(50),
            marginTop: isPortrait() ? useResponsiveWidth(3) : 0,
          }}>
          <Text
            style={{
              fontSize: useResponsiveFontSize(2),
              textAlign: 'right',
              color: CONSTANTS.COLORS.GRAY,
              fontStyle: 'italic',
            }}>
            {t('back_to_topics')}
          </Text>
        </TouchableOpacity>
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
