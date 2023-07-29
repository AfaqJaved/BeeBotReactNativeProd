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

export interface MenuItemProps {
  onClick(): void;
  children?: any;
  show: boolean;
}

export const Accordian = (props: MenuItemProps) => {
  const accordianWidth = useResponsiveWidth(90);
  const accordianImageWidth = isPortrait()
    ? useResponsiveWidth(15)
    : useResponsiveWidth(7.5);
  const accordianTitleFontSize = useResponsiveFontSize(3);
  const accordianTitleMarginLeft = useResponsiveWidth(4);
  const selectMonthMargin = isPortrait()
    ? useResponsiveHeight(2)
    : useResponsiveHeight(5);
  const selectMonthFontSize = useResponsiveFontSize(2.5);

  const monthGridGap = isPortrait() ? useResponsiveWidth(1) : 0;
  const monthGridHeight = isPortrait()
    ? useResponsiveHeight(45)
    : useResponsiveHeight(70);
  return (
    <View style={{marginBottom : useResponsiveHeight(3)}}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: accordianWidth,
          justifyContent: 'space-between',
          paddingTop: 9,
          paddingBottom: 9,
          paddingLeft: 15,
          paddingRight: 15,
          alignItems: 'center',
          backgroundColor: CONSTANTS.COLORS.GREEN,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Bear}
            style={{
              aspectRatio: 1,
              width: accordianImageWidth,
            }}></Image>
          <Text
            style={{
              marginLeft: accordianTitleMarginLeft,
              fontSize: accordianTitleFontSize,
              color: CONSTANTS.COLORS.WHITE,
            }}>
            Preschoolers{'\n'}GEFTopics
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.onClick();
          }}>
          <Image
            style={{transform: [{rotate: props.show ? '180deg' : '0deg'}]}}
            source={Arrow}></Image>
        </TouchableOpacity>
      </View>

      {/* Main ACCORDIAN BODY */}
      <View style={{display: props.show ? 'flex' : 'none'}}>
        {/* TEXT SELECT MONTH */}
        <View
          style={{
            width: accordianWidth,
            marginTop: selectMonthMargin,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: selectMonthMargin,
          }}>
          <Text
            style={{
              fontSize: selectMonthFontSize,
              fontFamily: 'Roboto-Regular',
              color: CONSTANTS.COLORS.GRAY,
            }}>
            Select Month
          </Text>
        </View>
        {/* TEXT END */}

        {/* MONTHS GIRD */}
        <View
          style={{
            width: accordianWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              gap: monthGridGap,
              width: accordianWidth,
              height: monthGridHeight,
            }}>
            <MonthBlock number="01" month="Jan" onClick={() => {}}></MonthBlock>
            <MonthBlock number="02" month="Feb" onClick={() => {}}></MonthBlock>
            <MonthBlock number="03" month="Mar" onClick={() => {}}></MonthBlock>
            <MonthBlock number="04" month="Apr" onClick={() => {}}></MonthBlock>
            <MonthBlock number="05" month="May" onClick={() => {}}></MonthBlock>
            <MonthBlock number="06" month="Jun" onClick={() => {}}></MonthBlock>
            <MonthBlock number="07" month="Jul" onClick={() => {}}></MonthBlock>
            <MonthBlock number="08" month="Aug" onClick={() => {}}></MonthBlock>
            <MonthBlock number="09" month="Sep" onClick={() => {}}></MonthBlock>
            <MonthBlock number="10" month="Oct" onClick={() => {}}></MonthBlock>
            <MonthBlock number="11" month="Nov" onClick={() => {}}></MonthBlock>
            <MonthBlock number="12" month="Dec" onClick={() => {}}></MonthBlock>
          </View>
        </View>
        {/* MONTHS GRID END */}
        <View
          style={{
            width: accordianWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: CONSTANTS.COLORS.GREEN,
            height: isPortrait()
              ? useResponsiveHeight(1)
              : useResponsiveHeight(2),
          }}></View>

        <View
          style={{
            backgroundColor: CONSTANTS.COLORS.LIGHT_WHITE,
            height: useResponsiveHeight(45),
            width: accordianWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: useResponsiveWidth(3),
          }}>
          {/* ROW */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap',justifyContent : "flex-start" ,width : accordianWidth}}>
            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>


            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>
          </View>

          {/* ROW */}
          <View
            style={{
              flexDirection: 'row',
              width : accordianWidth,
              flexWrap: 'wrap',
              justifyContent : "flex-start",
              marginTop: useResponsiveHeight(2),
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color : CONSTANTS.COLORS.BLACK,
                  fontSize: useResponsiveFontSize(2.5),
                  textDecorationLine: 'underline',
                  fontFamily: 'Roboto-Regular',
                }}>
                Content1 /
              </Text>
            </TouchableOpacity>


          </View>
        </View>
      </View>
    </View>
  );
};
