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
  isTablet,
  isTabletAndPortrait,
  isTabletAndLandScape,
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';

import Bear from '../assets/img/bear.png';
import {MonthBlock} from '../components/MonthBlock';
import {isLandscape, isPortrait} from '../utils/Utils';
import {useTranslation} from 'react-i18next';
import {Months} from '../models/LessonsModel';

import ArrowMobile from '../assets/img/arrow_mobile.png';
import ArrowTablet from '../assets/img/arrow_tablet.png';
import ArrowTabletLarge from '../assets/img/arrow_tablet.png';

export interface AccordianProps {
  onClick(): void;
  onMonthClick(month: Months): void;
  children?: any;
  show: boolean;
  accordianTitle: string;
  accordianImage: any;
  accordianBackgroundColor: string;
  monthAndTopics: Months[];
  navigation: any;
}

export const Accordian = (props: AccordianProps) => {
  const {t} = useTranslation();
  const accordianWidth = useResponsiveWidth(90);
  const accordianImageWidth = isPortrait()
    ? useResponsiveWidth(15)
    : useResponsiveWidth(7.5);
  const accordianTitleFontSize = useResponsiveFontSize(2);
  const accordianTitleMarginLeft = useResponsiveWidth(4);
  const selectMonthMargin = isPortrait()
    ? useResponsiveHeight(2)
    : useResponsiveHeight(5);
  const selectMonthFontSize = useResponsiveFontSize(2.5);

  const monthGridGap = isPortrait()
    ? useResponsiveWidth(1)
    : useResponsiveWidth(0);
  const monthGridHeight = isPortrait()
    ? useResponsiveHeight(60)
    : useResponsiveHeight(70);

  const [selectedMonth, setSelectedMonth] = React.useState<Months | undefined>(
    undefined,
  );

  // React.useEffect(()=>{
  //   console.log(useResponsiveHeight(3));

  // },[])

  return (
    <View
      style={{
        marginTop: isTabletAndPortrait()
          ? useResponsiveHeight(2)
          : useResponsiveHeight(2),
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 'auto',
          borderRadius: 5,
          marginRight: 'auto',
          width: accordianWidth,
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
            ? useResponsiveHeight(0.5)
            : isTabletAndLandScape()
            ? useResponsiveHeight(1.5)
            : useResponsiveHeight(4),
          paddingRight: isTabletAndPortrait()
            ? useResponsiveHeight(1)
            : isTabletAndLandScape()
            ? useResponsiveHeight(1.5)
            : useResponsiveHeight(4),
          alignItems: 'center',
          backgroundColor: props.accordianBackgroundColor,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            props.onClick();
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: useResponsiveWidth(90),
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: isTabletAndPortrait()
              ? useResponsiveWidth(2.5)
              : isTabletAndLandScape()
              ? useResponsiveWidth(1.5)
              : useResponsiveWidth(4),
            paddingRight: isTabletAndPortrait()
            ? useResponsiveWidth(2.5)
            : isTabletAndLandScape()
            ? useResponsiveWidth(1.5)
            : useResponsiveWidth(4),
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
                fontSize: isTabletAndPortrait() ?  useResponsiveFontSize(1.5) : isTabletAndLandScape() ? useResponsiveFontSize(1.2) : useResponsiveFontSize(2),
                color: CONSTANTS.COLORS.WHITE,
              }}>
              {t(props.accordianTitle).toUpperCase()}
            </Text>
          </View>
          <Image
            style={{
              marginLeft: 'auto',
              transform: [{rotate: props.show ? '180deg' : '0deg'}],
            }}
            source={getResponsiveResource(
              ArrowMobile,
              ArrowTablet,
              ArrowTabletLarge,
            )}></Image>
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
              fontSize: isTabletAndPortrait() ? useResponsiveFontSize(1.5) : isTabletAndLandScape() ?  useResponsiveFontSize(1.5): useResponsiveFontSize(2.5),
              // fontFamily: 'Roboto-Regular',
              color: CONSTANTS.COLORS.GRAY,
              fontStyle: 'italic',
            }}>
            {t('select_month')}
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
              justifyContent: isPortrait() ? 'flex-start' : 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: monthGridGap,
              width: accordianWidth,
              height: 'auto',
              marginBottom: useResponsiveWidth(4),
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
            marginBottom: useResponsiveHeight(2),
          }}>
          {/* ROW */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              width: accordianWidth,
            }}>
            {selectedMonth?.topics.map((topic, index) => {
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
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('LessonView')}
                    style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: CONSTANTS.COLORS.BLACK,
                        fontSize: isTabletAndPortrait() ? useResponsiveFontSize(1.5) : isTabletAndLandScape() ? useResponsiveFontSize(1.5) : useResponsiveFontSize(2.5),
                        fontFamily: 'Roboto-Regular',
                      }}>
                      {finalIndex.toString() + '. '}
                    </Text>
                    <Text
                      style={{
                        color: CONSTANTS.COLORS.BLACK,
                        fontSize: isTabletAndPortrait() ? useResponsiveFontSize(1.5) : isTabletAndLandScape() ? useResponsiveFontSize(1.5) : useResponsiveFontSize(2.5),
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
