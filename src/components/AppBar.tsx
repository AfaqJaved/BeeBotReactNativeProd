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
} from 'react-native';
import {CONSTANTS} from '../constants/Contants';

import Home from '../assets/img/home-alt.png';
import Logo from '../assets/img/logo.png';
import Ble from '../assets/img/bt.png';
import {
  isLandscape,
  isPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {LanguageDialog} from '../dialog/LanguageDialog';
import {LangDialog} from '../dialog/LangDialog';
import i18n from '../../translation';

export interface AppBarProps {
  onHomeClick(): void;
  onBleClick(): void;
  onLanguageCliclk(): void;
}

export const AppBar = (props: AppBarProps) => {
  const appBarWidth = useResponsiveWidth(100);
  const appBarHeight = isPortrait()
    ? useResponsiveHeight(15)
    : useResponsiveHeight(20);
  const textSize = useResponsiveFontSize(3);
  const [dialogVisible, setDialogVisible] = React.useState<boolean>(false);

  const locale : string =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

  return (
    <View>

      <View
        style={{
          width: appBarWidth,
          backgroundColor: CONSTANTS.COLORS.YELLOW,
          height: appBarHeight,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={props.onHomeClick}>
          <Image
            resizeMode="contain"
            style={{
              width: useResponsiveWidth(6),
              height: useResponsiveHeight(6),
            }}
            source={Home}
            alt="image"
          />
        </TouchableOpacity>
        <Image
          source={Logo}
          resizeMode="contain"
          style={{
            width: useResponsiveWidth(45),
            height: useResponsiveHeight(3),
          }}
          alt="image"
        />
        <View
          style={{
            height: useResponsiveHeight(10),
            width: useResponsiveWidth(15),
            flexDirection: 'row',
            justifyContent: isPortrait() ? 'space-between' : 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={props.onHomeClick}>
            <Image
              resizeMode="contain"
              source={Ble}
              style={{
                width: useResponsiveWidth(4),
                height: useResponsiveHeight(6),
              }}
              alt="image"
            />
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
    </View>
  );
};
