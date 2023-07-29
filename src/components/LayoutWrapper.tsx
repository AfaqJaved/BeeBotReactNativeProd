import {ScrollView, View} from 'react-native';
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

export interface LayoutWrapperProps {
  navigation: any;
  children: any;
}

export const LayoutWrapper = ({navigation, children}: LayoutWrapperProps) => {
  const mainContentWidth = useResponsiveWidth(100);
  const mainContentHeight = isPortrait()
    ? useResponsiveHeight(80)
    : useResponsiveHeight(70);
  const [isLangDialogVisible , setIsLangDialogVisible] = React.useState(false);
  return (
    <View
      style={{position: 'relative' , width : useResponsiveWidth(100),height : useResponsiveHeight(100)}}>
      <LangDialog onClose={()=>setIsLangDialogVisible(!isLangDialogVisible)} visible={isLangDialogVisible}></LangDialog>
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
        }}
      />

      <View
        style={{
          marginTop: useResponsiveHeight(-3),
          borderRadius: 20,
          width: useResponsiveWidth(100),
          height: useResponsiveHeight(6),
          backgroundColor: CONSTANTS.COLORS.WHITE,
        }}></View>

      {/* Main Content */}
      <ScrollView
        style={{
          width: mainContentWidth,
          height: mainContentHeight,
          backgroundColor: CONSTANTS.COLORS.WHITE,
          borderRadius: 25,
          borderColor: CONSTANTS.COLORS.YELLOW,
          borderStyle: 'solid',
        }}>
        {children}
        <View style={{height: useResponsiveHeight(1)}}></View>
      </ScrollView>
      <BottomBar />

    </View>
  );
};
