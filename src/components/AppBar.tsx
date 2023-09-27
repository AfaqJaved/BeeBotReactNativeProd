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

// import HomeMobile from '../assets/img/home_mobile.png';
// import HomeTablet from '../assets/img/home_tablet.png';
// import HomeTabletLarge from '../assets/img/home_tabletlg.png';

// import LogoMobile from '../assets/img/logo_mobile.png';
// import LogoTablet from '../assets/img/logo_tablet.png';
// import LogoTabletLarge from '../assets/img/logo_tabletlg.png';

// import BleMobile from '../assets/img/bt_mobile.png';
// import BleTablet from '../assets/img/bt_tablet.png';
// import BleTabletLarge from '../assets/img/bt_tabletlg.png';

import {
  deviceType,
  getResponsiveResource,
  isLandscape,
  isPortrait,
  isTablet,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {LangDialog} from '../dialog/LangDialog';
import i18n from '../../translation';
import AppBarBackMobile from '../assets/img/appbar_mobile.png';
import AppBarBackTablet from '../assets/img/appbar_tablet.png';
import AppBarBackRTabletLg from '../assets/img/appbar_desktop.png';
import HomeSvgMobile from '../svg/HomeSvgMobile';
import {HomeSvgTablet} from '../svg/HomeSvgTablet';
import {AppBarLogoMobile} from '../svg/AppBarLogoMobile';
import {AppBarLogoTablet} from '../svg/AppBarLogoTablet';
import {BleSvgMobile} from '../svg/BleSvgMobile';
import {BleSvgTablet} from '../svg/BleSvgTablet';
import {BatterySvgMobile} from '../svg/BatterySvgMobile';
import {BatterySvgTablet} from '../svg/BatterySvgTablet';
import {useSelector} from 'react-redux';
import {RootReducer} from '../redux/Store';

export interface AppBarProps {
  onHomeClick(): void;
  onBleClick(): void;
  onLanguageCliclk(): void;
  children?: any;
}

export const AppBar = (props: AppBarProps) => {
  const appBarWidth = useResponsiveWidth(101);
  // const appBarHeight = isPortrait()
  //   ? isTablet() ? useResponsiveHeight(12) :  useResponsiveHeight(17)
  //   : useResponsiveHeight(24);
  const appBarHeight = isTabletAndPortrait()
    ? useResponsiveHeight(12)
    : isTabletAndLandScape()
    ? useResponsiveHeight(15)
    : isPortrait()
    ? useResponsiveHeight(17)
    : useResponsiveHeight(25);
  const textSize = isTablet()
    ? useResponsiveFontSize(2)
    : useResponsiveFontSize(2.5);
  const [dialogVisible, setDialogVisible] = React.useState<boolean>(false);
  const battery = useSelector((state: RootReducer) => state.bleReducer.battery);

  return (
    <View style={{zIndex: 0, position: 'relative', backgroundColor: 'white'}}>
      <ImageBackground
        resizeMode={
          isTabletAndPortrait()
            ? 'contain'
            : isTabletAndLandScape()
            ? 'contain'
            : 'contain'
        }
        source={getResponsiveResource(
          AppBarBackRTabletLg,
          AppBarBackRTabletLg,
          AppBarBackRTabletLg,
        )}
        style={{
          width: appBarWidth,
          backgroundColor : CONSTANTS.COLORS.YELLOW,
          height: appBarHeight,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            // paddingLeft: useResponsiveWidth(3.5),
            // paddingRight: useResponsiveWidth(3.5),
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems:
              deviceType() === DEVICE.MOBILE && battery != 0
                ? 'flex-start'
                : 'center',
            width: useResponsiveWidth(90),
            marginLeft: 'auto',
            marginTop: 0,
            marginRight: 'auto',
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
            {deviceType() == DEVICE.MOBILE && battery != 0 ? (
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
                    color: 'black',
                  }}>
                  {battery}%
                </Text>
              </View>
            ) : (
              ''
            )}
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {deviceType() !== DEVICE.MOBILE && battery != 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  right: useResponsiveWidth(4),
                  alignItems: 'center',
                }}>
                <BatterySvgTablet></BatterySvgTablet>
                <Text
                  style={{
                    marginLeft: useResponsiveWidth(1),
                    fontSize: useResponsiveFontSize(1.2),
                    color: 'black',
                  }}>
                  {battery}%
                </Text>
              </View>
            ) : (
              ''
            )}

            <TouchableOpacity
              style={{position: 'relative', right: useResponsiveWidth(2)}}
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
      {props.children}
    </View>
  );
};
