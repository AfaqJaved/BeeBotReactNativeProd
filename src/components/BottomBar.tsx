import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {CONSTANTS} from '../constants/Contants';

import LogoBottom from '../assets/img/Logo_DO.png';
import {isLandscape, isPortrait, useResponsiveFontSize, useResponsiveHeight, useResponsiveWidth} from '../utils/Utils';
import { useTranslation } from 'react-i18next';


export const BottomBar = () => {
  const {t} = useTranslation();
  const appBarWidth = useResponsiveWidth(100);
  const appBarHeight = isPortrait()
    ? useResponsiveHeight(10)
    : useResponsiveHeight(20);
  const textSize = useResponsiveFontSize(3);

  return (
    <View
      style={{
        borderTopColor : CONSTANTS.COLORS.GRAY,
        borderTopWidth : 3,
        width: appBarWidth,
        backgroundColor: CONSTANTS.COLORS.WHITE,
        height: appBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Roboto-Regular',
          color: CONSTANTS.COLORS.BLACK,
          fontSize: textSize,
        }}>
        {t("version")}
      </Text>
      <Image source={LogoBottom} resizeMode='contain' style={{width : useResponsiveWidth(11),height : useResponsiveHeight(5)}} alt="image" />
      <Text
        style={{
          fontFamily: 'Roboto-Regular',
          color: CONSTANTS.COLORS.BLACK,
          fontSize: textSize,
        }}>
        {t("about")}
      </Text>
    </View>
  );
};
