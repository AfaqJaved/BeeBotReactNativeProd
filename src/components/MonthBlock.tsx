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
import {
  isLandscape,
  isPortrait,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export interface AppBarProps {
  onClick(): void;
  number: string;
  month: string;
  children?: any;
  backgroundColor: string;
  isActive: boolean;
  isEnabled: boolean;
}

export const MonthBlock = (props: AppBarProps) => {
  const monthRectWidth = isPortrait()
    ? useResponsiveWidth(14)
    : useResponsiveWidth(7);
  const monthNameFontSize = isTabletAndPortrait()
  ? useResponsiveFontSize(1.7)
  : isTabletAndLandScape()
  ? useResponsiveFontSize(1.7)
  : useResponsiveFontSize(2);
  const numberFontSize = isTabletAndPortrait()
    ? useResponsiveFontSize(3)
    : isTabletAndLandScape()
    ? useResponsiveFontSize(3)
    : useResponsiveFontSize(4);
  const padding = useResponsiveWidth(2);

  return (
    <TouchableOpacity
      onPress={() => {
        props.onClick();
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: monthRectWidth,
          aspectRatio: 1,
          backgroundColor: props.isEnabled
            ? props.isActive
              ? props.backgroundColor
              : CONSTANTS.COLORS.LIGHT_GRAY
            : CONSTANTS.COLORS.LIGHT_GRAY,
          // padding: padding,
        }}>
        <Text
          style={{
            fontSize: numberFontSize,
            fontWeight: 'bold',
            color: props.isEnabled
              ? props.isActive
                ? 'white'
                : props.backgroundColor
              : CONSTANTS.COLORS.GRAY,
          }}>
          {props.number}
        </Text>
      </View>
      <Text
        style={{
          fontSize: monthNameFontSize,
          color: props.isEnabled
            ? props.backgroundColor
            : CONSTANTS.COLORS.GRAY,
          fontFamily: 'Robot-Regular',
        }}>
        {props.month}
      </Text>
    </TouchableOpacity>
  );
};
