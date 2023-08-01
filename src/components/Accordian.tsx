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
import {useTranslation} from 'react-i18next';
import {Months} from '../models/LessonsModel';

export interface AccordianProps {
  onClick(): void;
  onMonthClick(month: Months): void;
  children?: any;
  show: boolean;
  accordianTitle: string;
  accordianImage: any;
  accordianBackgroundColor: string;
  monthAndTopics: Months[];
  navigation : any
}

export const Accordian = (props: AccordianProps) => {
  const {t} = useTranslation();
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

  const monthGridGap = isPortrait() ? useResponsiveWidth(2) : useResponsiveWidth(5);
  const monthGridHeight = isPortrait()
    ? useResponsiveHeight(60)
    : useResponsiveHeight(70);

  const [selectedMonth, setSelectedMonth] = React.useState<Months | undefined>(
    undefined,
  );

  return (
    <View style={{marginBottom: useResponsiveHeight(3)}}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: accordianWidth,
          justifyContent: 'space-between',
          paddingTop: useResponsiveHeight(2),
          paddingBottom: useResponsiveHeight(2),
          paddingLeft: useResponsiveWidth(4),
          paddingRight: useResponsiveWidth(4),
          alignItems: 'center',
          backgroundColor: props.accordianBackgroundColor,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={props.accordianImage}
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
            {t(props.accordianTitle)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.onClick();
          }}>
          <Image
            style={{aspectRatio : 1, width : useResponsiveWidth(5) , height : useResponsiveHeight(5),transform: [{rotate: props.show ? '180deg' : '0deg'}]}}
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
              justifyContent: 'center',
              alignItems : "center",
              flexWrap: 'wrap',
              gap: monthGridGap,
              width: accordianWidth,
              height: 'auto',
              marginBottom : useResponsiveWidth(4)
            }}>
            {props.monthAndTopics.map((monthTopic, index) => {
              index++;
              let finalIndex = '';
              if (index.toString().length < 2) {
                finalIndex = '0' + index.toString();
              } else {
                finalIndex = index.toString();
              }
              return (
                <MonthBlock
                  number={finalIndex}
                  backgroundColor={props.accordianBackgroundColor}
                  month={t(monthTopic.month)}
                  isActive={monthTopic.isTopicsVisible}
                  isEnabled={monthTopic.isactive}
                  onClick={() => {
                    props.onMonthClick(monthTopic);
                    setSelectedMonth(monthTopic);
                  }}></MonthBlock>
              );
            })}
          </View>
        </View>
        {/* MONTHS GRID END */}
        <View
          style={{
            width: accordianWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: props.accordianBackgroundColor,
            height: isPortrait()
              ? useResponsiveHeight(1)
              : useResponsiveHeight(2),
          }}></View>

        <View
          style={{
            backgroundColor: CONSTANTS.COLORS.LIGHT_WHITE,
            height: 'auto',
            width: accordianWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: useResponsiveWidth(3),
          }}>
          {/* ROW */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              width: accordianWidth,
            }}>
            {selectedMonth?.topics.map((topic,index) => {
              let finalIndex = ++index;

              return (
                <View
                  style={{
                    flexDirection: 'row',
                    width: useResponsiveWidth(80),
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    marginTop: useResponsiveHeight(1),
                  }}>
                  <TouchableOpacity onPress={()=> props.navigation.navigate("PdfView")} style={{flexDirection : "row"}}>
                    <Text
                      style={{
                        color: CONSTANTS.COLORS.BLACK,
                        fontSize: useResponsiveFontSize(2.5),
                        fontFamily: 'Roboto-Regular',
                      }}>
                      {finalIndex.toString()+". "}
                    </Text>
                    <Text
                      style={{
                        color: CONSTANTS.COLORS.BLACK,
                        fontSize: useResponsiveFontSize(2.5),
                        textDecorationLine: 'underline',
                        fontFamily: 'Roboto-Regular',
                      }}>
                      {t(topic)}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          {/* ROW */}
        </View>
      </View>
    </View>
  );
};
