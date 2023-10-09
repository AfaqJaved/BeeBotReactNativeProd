import {Text, View} from 'react-native';
import {CONSTANTS} from '../constants/Contants';
import {
  useResponsiveWidth,
  isTabletAndPortrait,
  useResponsiveFontSize,
  isTabletAndLandScape,
  isPortrait,
  useResponsiveHeight,
} from '../utils/Utils';
import {Paragraph} from './Paragraph';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  title: string;
  points: string[];
}

export const AccordianPoints = (props: Props) => {
  const [show, setShow] = React.useState(false);
  return (
    <View
      style={{
        marginBottom: isPortrait()
          ? useResponsiveWidth(10)
          : useResponsiveWidth(5),
      }}>
      <TouchableOpacity
        style={{
          marginBottom: isPortrait()
            ? useResponsiveWidth(2)
            : useResponsiveWidth(1),
        }}
        onPress={() => setShow(!show)}>
        <Text
          style={{
            marginBottom: useResponsiveWidth(2),
            fontSize: isTabletAndPortrait()
              ? useResponsiveFontSize(2)
              : isTabletAndLandScape()
              ? useResponsiveFontSize(2)
              : useResponsiveFontSize(3),
            color: CONSTANTS.COLORS.BLACK,
            fontWeight: '600',
            textDecorationLine: 'underline',
          }}>
          {props.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
      {show ? (
        <View>
          {props.points.map((point, index) => {
            return (
              <View
                key={index}
                style={{
                  marginBottom: 10,
                  flexDirection: 'row',
                  gap: useResponsiveWidth(2),
                }}>
                <Paragraph
                  flex={isPortrait() ? 5 : 2}
                  text={(index + 1).toString() + '.'}></Paragraph>
                <Paragraph flex={90} text={point}></Paragraph>
              </View>
            );
          })}
          <TouchableOpacity
            onPress={() => {
              setShow(!show);
            }}
            style={{
              width: useResponsiveWidth(90),
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: isPortrait()
                ? useResponsiveHeight(4)
                : useResponsiveHeight(8),
            }}>
            <Text
              style={{
                fontSize: isTabletAndPortrait()
                  ? useResponsiveFontSize(1.5)
                  : isTabletAndLandScape()
                  ? useResponsiveFontSize(1.5)
                  : useResponsiveFontSize(2),
                width: useResponsiveWidth(90),
                textAlign: 'right',
                color: CONSTANTS.COLORS.GRAY,
                fontStyle: 'italic',
              }}>
              {'свернуть'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </View>
  );
};
