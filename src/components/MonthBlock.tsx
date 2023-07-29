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

import Home from '../assets/img/home-alt.png';
import Logo from '../assets/img/logo.png';
import Ble from '../assets/img/bt.png';
import {isLandscape, isPortrait, useResponsiveFontSize, useResponsiveHeight, useResponsiveWidth} from '../utils/Utils';

export interface AppBarProps {
  onClick(): void;
  number: string;
  month: string;
  children?: any;
}

export const MonthBlock = (props: AppBarProps) => {
  const monthRectWidth = isPortrait() ? useResponsiveHeight(10) : useResponsiveWidth(13);
  const monthNameFontSize = useResponsiveFontSize(3);
  const numberFontSize = isPortrait() ? useResponsiveFontSize(5) : useResponsiveFontSize(6);
  const padding = useResponsiveWidth(2);


  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width:monthRectWidth,
          aspectRatio : 1,
          backgroundColor: CONSTANTS.COLORS.LIGHT_GRAY,
          padding: padding,
        }}>
        <Text
          style={{
            fontSize: numberFontSize,
            fontWeight: 'bold',
            color: CONSTANTS.COLORS.GREEN,
          }}>
          {props.number}
        </Text>
      </View>
      <Text
        style={{
          fontSize: monthNameFontSize,
          color: CONSTANTS.COLORS.GREEN,
          fontFamily: 'Robot-Regular',
        }}>
        {props.month}
      </Text>
    </View>
  );
};
