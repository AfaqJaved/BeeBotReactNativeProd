import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {CONSTANTS} from '../constants/Contants';
import {
  isPortrait,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import Cancel from '../assets/img/cancel_tablet_lg.png';
import {TouchableOpacity} from 'react-native';

export enum Commands {
  F,
  B,
  L,
  R,
  P,
  NULL,
}

type Card = {
  index: number;
  empty: boolean;
  image: any;
  command: Commands;
  onDelete?: () => void;
};

const Card = (prop: Card) => {
  return (
    <View
      style={{
        width: isPortrait() ? useResponsiveWidth(20) : useResponsiveWidth(10),
        marginLeft: useResponsiveWidth(2),
      }}>
      <Text
        style={{
          fontSize: isTabletAndPortrait()
            ? useResponsiveFontSize(1.5)
            : isTabletAndLandScape()
            ? useResponsiveFontSize(1.5)
            : useResponsiveFontSize(2),
          textAlign: 'center',
          color: CONSTANTS.COLORS.GRAY,
        }}>
        {prop.index.toString()}
      </Text>
      {prop.empty ? (
        <View
          // source={null}
          style={{
            borderRadius: 3,
            aspectRatio: 1,
            backgroundColor: CONSTANTS.COLORS.LIGHT_GRAY,
          }}>
          <Text></Text>
        </View>
      ) : (
        <ImageBackground
          source={prop.image}
          style={{
            position: 'relative',
            borderRadius: 3,
            aspectRatio: 1,
            backgroundColor: CONSTANTS.COLORS.LIGHT_GRAY,
          }}>
          <TouchableOpacity onPress={prop.onDelete}>
            <Image
              resizeMode="cover"
              style={{
                position: 'absolute',
                width: isPortrait()
                  ? useResponsiveWidth(7)
                  : useResponsiveWidth(4),
                height: isPortrait()
                  ? useResponsiveWidth(7)
                  : useResponsiveWidth(4),
                top: -15,
                right: 1,
                borderRadius: 50,
                backgroundColor: CONSTANTS.COLORS.SKY,
              }}
              source={Cancel}></Image>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </View>
  );
};

export default Card;
