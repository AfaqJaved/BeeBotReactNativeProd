import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';

import {CONSTANTS} from '../constants/Contants';

import Home from '../assets/img/home-alt.png';
import Logo from '../assets/img/logo.png';
import Ble from '../assets/img/bt.png';
import {
  isLandscape,
  isPortrait,
  isTablet,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';

export interface MenuItemProps {
  onClick(): void;
  image: any;
  label: string;
  width: number;
  heightLand: number;
  heightPort: number;
}

export const MenuItem = (props: MenuItemProps) => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <ImageBackground
        borderRadius={10}
        source={props.image}
        resizeMode={'cover'}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          width: useResponsiveWidth(props.width),
          height: isPortrait()
            ? useResponsiveHeight(props.heightPort)
            : useResponsiveHeight(props.heightLand),
        }}>
        <Text
          style={{
            position: 'absolute',
            bottom: 15,
            left: 15,
            fontFamily: 'Roboto-Regular',
            fontWeight: '500',
            fontStyle: 'normal',
            // lineHeight: isPortrait()
            //   ? useResponsiveHeight(2)
            //   : isTabletAndLandScape() ? useResponsiveHeight(2.7) : useResponsiveFontSize(2),
            color: CONSTANTS.COLORS.WHITE,
            lineHeight: isTabletAndPortrait()
            ? useResponsiveHeight(1.7)
            : isTabletAndLandScape()
            ? useResponsiveHeight(2.7)
            : isPortrait() ? useResponsiveHeight(2.5) : useResponsiveHeight(5),
            fontSize: isTabletAndPortrait()
              ? useResponsiveFontSize(1)
              : isTabletAndLandScape()
              ? useResponsiveFontSize(1)
              : useResponsiveFontSize(1.7),
          }}>
          {props.label.toUpperCase()}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
