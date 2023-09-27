import React, {useEffect, useReducer} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
  Dimensions,
  TextInput,
} from 'react-native';
import {AppBar} from '../components/AppBar';
import {BottomBar} from '../components/BottomBar';
import {
  getResponsiveResource,
  isPortrait,
  isTablet,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {MenuItem} from '../components/Menu';
import SearchMobile from '../assets/img/search_mobile.png';
import SearchTablet from '../assets/img/search_tablet.png';
import SearchTabletLarge from '../assets/img/search_tabletlg.png';

import {useResponsiveHeight, useResponsiveWidth} from '../utils/Utils';
import {Accordian} from '../components/Accordian';
import {LayoutWrapper} from '../components/LayoutWrapper';
import {LESSONS_MODELS} from '../data/LessonsData';
import { useTranslation } from 'react-i18next';

const LessonsPage = ({navigation}: any) => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const mainContentWidth = useResponsiveWidth(100);
  const mainContentHeight = isPortrait()
    ? useResponsiveHeight(85)
    : useResponsiveHeight(70);
  const roudedBorderWidth = useResponsiveWidth(100);
  const roudedBorderHeight = useResponsiveHeight(6);
  const roudedBorderMarginTop = useResponsiveHeight(-3);

  const [lessons, setLessons] = React.useState(LESSONS_MODELS);
  const {t} = useTranslation();
  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);


  React.useEffect(()=>{
    console.log("called lesson page" + lessons);

  },[lessons])

  return (
    <LayoutWrapper navigation={navigation}>
      <View style={{position: 'relative', marginTop : isPortrait() ? 0 :  useResponsiveHeight(5) }}>
        <View style={{position : "relative"}}>
          <TextInput
            placeholder={t("lessons_search_hint")}
            textAlign="center"
            textAlignVertical="center"
            placeholderTextColor={CONSTANTS.COLORS.GRAY}
            style={{
              width: useResponsiveWidth(90),
              height: isPortrait()
                ? useResponsiveHeight(8)
                : useResponsiveHeight(10),
              marginLeft: 'auto',
              textAlign: 'center',
              marginRight: 'auto',
              fontSize: isTabletAndPortrait()  ? useResponsiveFontSize(1.5) : isTabletAndLandScape() ? useResponsiveFontSize(1.5): useResponsiveFontSize(2),
              borderBottomColor: '#8C8989',
              borderBottomWidth: 2,
              color: 'black',
            }}></TextInput>
        </View>
        <Image
          source={getResponsiveResource(
            SearchMobile,
            SearchTablet,
            SearchTablet,
          )}
          resizeMode="contain"
          style={{
            position : "absolute",
            left : useResponsiveWidth(5),
            top : isTabletAndPortrait() ? useResponsiveHeight(3) : isTabletAndLandScape() ? useResponsiveHeight(3) : useResponsiveHeight(3)
          }}
        />
      </View>
      {lessons.map((lesson, index) => {
        return (
          <Accordian
            navigation={navigation}
            key={lesson.accordianTitle}
            accordianBackgroundColor={lesson.accordianBackgroundColor}
            accordianImage={lesson.accordianImage}
            accordianTitle={lesson.accordianTitle}
            show={lesson.isAccordianBodyVisible}
            monthAndTopics={lesson.months}
            onMonthClick={month => {
              const updated = lessons.map(hold => {
                hold.months.map(monthHold => {
                  if (month.month === monthHold.month) {
                    monthHold.isTopicsVisible = !monthHold.isTopicsVisible;
                  } else {
                    monthHold.isTopicsVisible = false;
                  }
                  return monthHold;
                });
                return hold;
              });
              setLessons(updated);
            }}
            onClick={() => {
              const updated = lessons.map(hold => {
                if (hold.accordianTitle === lesson.accordianTitle) {
                  hold.isAccordianBodyVisible = !hold.isAccordianBodyVisible;
                }
                return hold;
              });
              setLessons(updated);
            }}></Accordian>
        );
      })}
    </LayoutWrapper>
  );
};

export default LessonsPage;
