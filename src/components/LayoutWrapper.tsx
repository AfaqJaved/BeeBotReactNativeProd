import {Dimensions, PermissionsAndroid, Platform, ScrollView, StatusBar, View} from 'react-native';
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
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../redux/Store';
import { ORIENTATION } from '../redux/Actions';


export interface LayoutWrapperProps {
  navigation: any;
  children: any;
  enableScroll?: boolean;
  scrollRef?: any;
}

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const LayoutWrapper = ({
  navigation,
  enableScroll,
  children,
  scrollRef,
}: LayoutWrapperProps) => {
  const mainContentWidth = useResponsiveWidth(100);
  const [isLangDialogVisible, setIsLangDialogVisible] = React.useState(false);
  const [isBleDialogVisible, setIsBleDialogVisible] = React.useState(false);
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);
  const orient = useSelector((state : RootReducer)=> state.bleReducer.isPortrait);
  const dispatch = useDispatch();


  if (Platform.OS === 'android') {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ]).then(result => {
      // console.log(result);
    });
  }



  React.useEffect(() => {
      if(isPortrait()){
        SystemNavigationBar.immersive();
      }
      else{
        SystemNavigationBar.navigationShow();
      }
  }, [navigation]);

  React.useEffect(() => {

    if(isPortrait()) {
      SystemNavigationBar.immersive();
    }
    else {
      SystemNavigationBar.navigationShow();
    }
    Dimensions.addEventListener('change', () => {
      if(isPortrait()) {
        SystemNavigationBar.immersive();
      }
      else{
        SystemNavigationBar.navigationShow();
      }
      forceUpdate();
    });
  }, []);


  const scrollToPosition = (y : number) => {
    scrollRef.scrollTo({y},{},true);
  }

  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      {/* <Toast /> */}
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
        }}></AppBar>

      <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
        ref={scrollRef}
        scrollEnabled={enableScroll}
        // onScroll={function(event: Object) {
        //   //@ts-ignore
        //   console.log(event.nativeEvent.contentOffset.y);
        //  }}
        style={{
          zIndex: 1,
          top: isPortrait() ? -33 : -25,
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

      {/* <View
        style={{
          marginTop: useResponsiveHeight(-3),
          borderRadius: 20,
          width: useResponsiveWidth(100),
          height: useResponsiveHeight(6),
          backgroundColor: CONSTANTS.COLORS.WHITE,
        }}></View> */}

      {/* Main Content */}

      <BottomBar />
    </View>
  );
};
