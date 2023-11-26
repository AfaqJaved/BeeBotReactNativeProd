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
import {
  useResponsiveHeight,
  useResponsiveWidth,
  useResponsiveFontSize,
  getResponsiveResource,
  isTabletAndPortrait,
  isTabletAndLandScape,
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';

import Bear from '../assets/img/bear.png';

import ArrowMobile from '../assets/img/arrow_mobile.png';
import ArrowTablet from '../assets/img/arrow_tablet.png';
import ArrowTabletLarge from '../assets/img/arrow_tablet.png';
import {MonthBlock} from '../components/MonthBlock';
import {isLandscape, isPortrait} from '../utils/Utils';
import { useTranslation } from 'react-i18next';

export interface MenuItemProps {
  children?: any;
  title: string;
  image: any;
  backgroundColor: string;
  artNo : string;
}

export const AccordianFields = (props: MenuItemProps) => {
  const {t} = useTranslation();
  const accordianfieldsWidth = useResponsiveWidth(90);
  const accordianfieldsImageWidth = isPortrait()
    ? useResponsiveWidth(15)
    : useResponsiveWidth(7.5);
  const accordianfieldsTitleFontSize = useResponsiveFontSize(3);
  const accordianfieldsTitleMarginLeft = useResponsiveWidth(4);
  const selectMonthMargin = isPortrait()
    ? useResponsiveHeight(2)
    : useResponsiveHeight(5);
  const selectMonthFontSize = useResponsiveFontSize(2.5);

  const monthGridGap = isPortrait() ? useResponsiveWidth(1) : 0;
  const monthGridHeight = isPortrait()
    ? useResponsiveHeight(45)
    : useResponsiveHeight(70);
  return (
    <View style={{marginTop: isTabletAndPortrait()
      ? useResponsiveHeight(2)
      : useResponsiveHeight(2)}}>
      <View
        style={{
          flexDirection: 'row',
          borderRadius : 5,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: accordianfieldsWidth,
          justifyContent: 'space-between',
          paddingTop: isTabletAndPortrait()
          ? useResponsiveHeight(1)
          : isTabletAndLandScape()
          ? useResponsiveHeight(1.5)
          : useResponsiveHeight(2),
          paddingBottom: isTabletAndPortrait()
          ? useResponsiveHeight(1)
          : isTabletAndLandScape()
          ? useResponsiveHeight(1.5)
          : useResponsiveHeight(2),
          paddingLeft: isTabletAndPortrait()
          ? useResponsiveHeight(2.5)
          : isTabletAndLandScape()
          ? useResponsiveHeight(1.5)
          : useResponsiveHeight(2),
          paddingRight: isTabletAndPortrait()
          ? useResponsiveHeight(2.5)
          : isTabletAndLandScape()
          ? useResponsiveHeight(1.5)
          : useResponsiveHeight(2),
          alignItems: 'center',
          backgroundColor: props.backgroundColor,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={props.image}
            style={{
              aspectRatio: 1,
              width: accordianfieldsImageWidth,
            }}></Image>
          <View>
            <Text
              style={{
                marginLeft: accordianfieldsTitleMarginLeft,
                fontSize: isTabletAndPortrait() ?  useResponsiveFontSize(2) : isTabletAndLandScape() ? useResponsiveFontSize(2) : useResponsiveFontSize(2.5),
                color: CONSTANTS.COLORS.WHITE,
              }}>
              {props.title}
            </Text>
            <Text
              style={{
                marginLeft: accordianfieldsTitleMarginLeft,
                fontSize: isTabletAndPortrait() ?  useResponsiveFontSize(1.5) : isTabletAndLandScape() ? useResponsiveFontSize(1.2) : useResponsiveFontSize(2),
                color: CONSTANTS.COLORS.WHITE,
              }}>
              {t("art")}: {props.artNo}
            </Text>
          </View>
        </View>

        <Image style={{transform: [{rotate: '-90deg'}]}} source={getResponsiveResource(ArrowMobile,ArrowTablet,ArrowTabletLarge)}></Image>
      </View>
    </View>
  );
};
