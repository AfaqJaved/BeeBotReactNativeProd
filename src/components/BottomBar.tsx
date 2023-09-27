import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';

import {CONSTANTS} from '../constants/Contants';

import LogoBottom from '../assets/img/Logo_DO.png';
import {
  androidBottomNavigationHeight,
  isLandscape,
  isPortrait,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {useTranslation} from 'react-i18next';

export const BottomBar = () => {
  const {t} = useTranslation();
  const appBarWidth = useResponsiveWidth(100);
  const appBarHeight = isPortrait()
    ? useResponsiveHeight(10)
    : useResponsiveHeight(15);
  const textSize = isTabletAndPortrait()
    ? useResponsiveFontSize(1.5)
    : isTabletAndLandScape()
    ? useResponsiveFontSize(1.5)
    : useResponsiveFontSize(2);

  return (
    <View
      style={{
        zIndex: 1,
        borderTopColor: CONSTANTS.COLORS.GRAY,
        borderTopWidth: 1,
        position: 'absolute',
        // bottom : Platform.OS === 'android'  ? androidBottomNavigationHeight(): 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: appBarWidth,
        backgroundColor: CONSTANTS.COLORS.WHITE,
        height: appBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: useResponsiveWidth(3),
        paddingRight: useResponsiveWidth(3),
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Roboto-Regular',
          color: CONSTANTS.COLORS.BLACK,
          fontSize: textSize,
        }}>
        {t('version')}
      </Text>
      <Image
        source={LogoBottom}
        resizeMode="contain"
        style={{width: useResponsiveWidth(11), height: useResponsiveHeight(5)}}
        alt="image"
      />
      <Text
        style={{
          fontFamily: 'Roboto-Regular',
          color: CONSTANTS.COLORS.BLACK,
          fontSize: textSize,
        }}>
        {t('about')}
      </Text>
    </View>
  );
};
