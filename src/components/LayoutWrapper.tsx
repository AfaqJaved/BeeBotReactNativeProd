import {PermissionsAndroid, Platform, ScrollView, View} from 'react-native';
import {AppBar} from './AppBar';
import {CONSTANTS} from '../constants/Contants';
import {
  isPortrait,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import React from 'react';
import {MenuItem} from './Menu';
import {BottomBar} from './BottomBar';
import {LangDialog} from '../dialog/LangDialog';
import {BleDialog} from '../dialog/BleDialog';
import Toast from 'react-native-toast-message';

import SystemNavigationBar from 'react-native-system-navigation-bar';

SystemNavigationBar.stickyImmersive();

export interface LayoutWrapperProps {
  navigation: any;
  children: any;
  enableScroll?: boolean;
  scrollRef?: any;
}

export const LayoutWrapper = ({
  navigation,
  enableScroll,
  children,
  scrollRef,
}: LayoutWrapperProps) => {
  const mainContentWidth = useResponsiveWidth(100);
  const [isLangDialogVisible, setIsLangDialogVisible] = React.useState(false);
  const [isBleDialogVisible, setIsBleDialogVisible] = React.useState(false);
  // const scrollRef = React.useRef<any>();

  if (Platform.OS === 'android') {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
    ]).then(result => {
      console.log(result);
    });
  }

  React.useEffect(() => {
    SystemNavigationBar.stickyImmersive();
  }, [navigation]);

  return (
    <View
      style={{
        position: 'relative',
        width: useResponsiveWidth(100),
        height: '100%',
        backgroundColor : "white",
      }}>
      <Toast />
      <LangDialog
        onClose={() => setIsLangDialogVisible(!isLangDialogVisible)}
        visible={isLangDialogVisible}></LangDialog>
      <BleDialog
        onClose={() => setIsBleDialogVisible(!isBleDialogVisible)}
        visible={isBleDialogVisible}></BleDialog>
      <AppBar
        onLanguageCliclk={() => {
          console.log('on Language Click');
          setIsLangDialogVisible(!isLangDialogVisible);
        }}
        onHomeClick={() => {
          navigation.navigate('Home');
        }}
        onBleClick={() => {
          console.log('Ble Clicked');
          setIsBleDialogVisible(!isBleDialogVisible);
        }}
      />

      {/* <View
        style={{
          marginTop: useResponsiveHeight(-3),
          borderRadius: 20,
          width: useResponsiveWidth(100),
          height: useResponsiveHeight(6),
          backgroundColor: CONSTANTS.COLORS.WHITE,
        }}></View> */}

      {/* Main Content */}
      <ScrollView
        ref={scrollRef}
        scrollEnabled={enableScroll}
        style={{
          width: mainContentWidth,
          height: 'auto',
          backgroundColor: CONSTANTS.COLORS.WHITE,
          borderRadius: 25,
          borderColor: CONSTANTS.COLORS.YELLOW,
          borderStyle: 'solid',
        }}>
        {children}
        <View style={{height: useResponsiveHeight(20)}}></View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};
