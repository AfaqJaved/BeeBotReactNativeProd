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

const ControlPage = ({navigation}: any) => {
  const [showLoading, setShowLoading] = React.useState(true);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const mainContentWidth = useResponsiveWidth(100);
  const mainContentHeight = isPortrait()
    ? useResponsiveHeight(85)
    : useResponsiveHeight(70);
  const {t} = useTranslation();
  const char = useSelector((state: RootReducer) => state.bleReducer.char);

  React.useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  const handleWebViewMessage = async (event: any) => {
    const message = event.nativeEvent.data;
    console.log(message);

    if (char != null) await char.writeWithoutResponse(base64.encode(message));
  };

  return (
    <LayoutWrapper enableScroll={false} navigation={navigation}>
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
        injectedJavaScript={JAVASCRIPT_BEEBOT}
        onLoad={() => setShowLoading(true)}
        onLoadEnd={() => setShowLoading(false)}
        style={{
          marginTop:
            Platform.OS === 'android' && isPortrait()
              ? useResponsiveHeight(5)
              : 0,
          width:
            isTablet() && isPortrait()
              ? useResponsiveWidth(70)
              : isPortrait()
              ? useResponsiveWidth(90)
              : Platform.OS === 'android'
              ? useResponsiveWidth(20)
              : useResponsiveWidth(25),
          height: isPortrait()
            ? useResponsiveHeight(90)
            : useResponsiveHeight(70),
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        source={{html: BEEBOT_HTML}}
        onMessage={handleWebViewMessage}
      />
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
