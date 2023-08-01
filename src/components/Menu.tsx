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
        resizeMode={"cover"}
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
            left: 20,
            fontFamily: 'Roboto-Regular',
            color: CONSTANTS.COLORS.WHITE,
            fontSize: isTablet() ? useResponsiveFontSize(1.5) : isPortrait()
              ? useResponsiveFontSize(2)
              : useResponsiveFontSize(2),
          }}>
          {props.label}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
