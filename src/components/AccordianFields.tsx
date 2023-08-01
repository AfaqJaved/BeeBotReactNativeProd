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
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';

import Bear from '../assets/img/bear.png';
import Arrow from '../assets/img/Vector36.png';
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
    <View style={{marginBottom: useResponsiveHeight(3)}}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: accordianfieldsWidth,
          justifyContent: 'space-between',
          paddingTop: useResponsiveHeight(2),
          paddingBottom: useResponsiveHeight(2),
          paddingLeft: useResponsiveWidth(4),
          paddingRight: useResponsiveWidth(4),
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
                fontSize: accordianfieldsTitleFontSize,
                color: CONSTANTS.COLORS.WHITE,
              }}>
              {props.title}
            </Text>
            <Text
              style={{
                marginLeft: accordianfieldsTitleMarginLeft,
                fontSize: useResponsiveFontSize(2),
                color: CONSTANTS.COLORS.WHITE,
              }}>
              {t("art")} : {props.artNo}
            </Text>
          </View>
        </View>

        <Image style={{aspectRatio : 1, width : useResponsiveWidth(5) , height : useResponsiveHeight(5),transform: [{rotate: '-90deg'}]}} source={Arrow}></Image>
      </View>
    </View>
  );
};
