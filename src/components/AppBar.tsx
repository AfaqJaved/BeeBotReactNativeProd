import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  NativeModules,
  ImageBackground,
} from 'react-native';
import {CONSTANTS, DEVICE} from '../constants/Contants';

import HomeMobile from '../assets/img/home_mobile.png';
import HomeTablet from '../assets/img/home_tablet.png';
import HomeTabletLarge from '../assets/img/home_tabletlg.png';

import LogoMobile from '../assets/img/logo_mobile.png';
import LogoTablet from '../assets/img/logo_tablet.png';
import LogoTabletLarge from '../assets/img/logo_tabletlg.png';

import BleMobile from '../assets/img/bt_mobile.png';
import BleTablet from '../assets/img/bt_tablet.png';
import BleTabletLarge from '../assets/img/bt_tabletlg.png';

import {
  deviceType,
  getResponsiveResource,
  isLandscape,
  isPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {LangDialog} from '../dialog/LangDialog';
import i18n from '../../translation';
import AppBarBackMobile from '../assets/img/appbar_mobile.png';
import AppBarBackTablet from '../assets/img/appbar_tablet.png';
import AppBarBackRTabletLg from '../assets/img/appbar_tabletlg.png';
import HomeSvgMobile from '../svg/HomeSvgMobile';
import {HomeSvgTablet} from '../svg/HomeSvgTablet';
import {AppBarLogoMobile} from '../svg/AppBarLogoMobile';
import {AppBarLogoTablet} from '../svg/AppBarLogoTablet';
import {BleSvgMobile} from '../svg/BleSvgMobile';
import {BleSvgTablet} from '../svg/BleSvgTablet';
import {BatterySvgMobile} from '../svg/BatterySvgMobile';
import {BatterySvgTablet} from '../svg/BatterySvgTablet';

export interface AppBarProps {
  onHomeClick(): void;
  onBleClick(): void;
  onLanguageCliclk(): void;
}

export const AppBar = (props: AppBarProps) => {
  const appBarWidth = useResponsiveWidth(101);
  const appBarHeight = isPortrait()
    ? useResponsiveHeight(18)
    : useResponsiveHeight(24);
  const textSize = useResponsiveFontSize(2.5);
  const [dialogVisible, setDialogVisible] = React.useState<boolean>(false);

  return (
    <View>
      <ImageBackground
        resizeMode="stretch"
        source={getResponsiveResource(
          AppBarBackMobile,
          AppBarBackTablet,
          AppBarBackRTabletLg,
        )}
        style={{
          width: appBarWidth,
          height: appBarHeight,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'flex-start',

          alignItems: 'center',
        }}>
        <View
          style={{
            paddingLeft: useResponsiveWidth(3.5),
            paddingRight: useResponsiveWidth(3.5),
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: deviceType() === DEVICE.MOBILE ? "flex-start" : "center",
            width: appBarWidth,
          }}>
          <TouchableOpacity onPress={props.onHomeClick}>
            {deviceType() == DEVICE.MOBILE ? (
              <HomeSvgMobile />
            ) : (
              <HomeSvgTablet />
            )}
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              alignItems: 'center',
            }}>
            {deviceType() == DEVICE.MOBILE ? (
              <AppBarLogoMobile />
            ) : (
              <AppBarLogoTablet />
            )}
            {deviceType() == DEVICE.MOBILE ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: useResponsiveHeight(1),
                }}>
                <BatterySvgMobile />
                <Text
                  style={{
                    marginLeft: useResponsiveWidth(1),
                    fontSize: useResponsiveFontSize(2),
                    color : 'black'
                  }}>
                  100%
                </Text>
              </View>
            ) : (
              ''
            )}
          </View>

          <View style={{flexDirection: 'row' , alignItems : "center"}}>
            {deviceType() !== DEVICE.MOBILE ? (
              <View style={{flexDirection: 'row',right : useResponsiveWidth(4),alignItems : "center"}}>
                <BatterySvgTablet></BatterySvgTablet>
                <Text
                  style={{
                    marginLeft: useResponsiveWidth(1),
                    fontSize: useResponsiveFontSize(1.2),
                    color : 'black'
                  }}>
                  100%
                </Text>
              </View>
            ) : (
              ''
            )}

            <TouchableOpacity
              style={{position: 'relative',right : useResponsiveWidth(2)}}
              onPress={props.onBleClick}>
              {deviceType() == DEVICE.MOBILE ? (
                <BleSvgMobile />
              ) : (
                <BleSvgTablet />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.onLanguageCliclk();
                setDialogVisible(!dialogVisible);
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: CONSTANTS.COLORS.BLACK,
                  fontSize: textSize,
                }}>
                {i18n.language.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
