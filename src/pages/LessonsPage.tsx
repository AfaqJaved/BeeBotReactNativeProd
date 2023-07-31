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
} from 'react-native';
import {AppBar} from '../components/AppBar';
import {BottomBar} from '../components/BottomBar';
import {isPortrait, useResponsiveFontSize} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {MenuItem} from '../components/Menu';

import {useResponsiveHeight, useResponsiveWidth} from '../utils/Utils';
import {Accordian} from '../components/Accordian';
import {LayoutWrapper} from '../components/LayoutWrapper';
import {LESSONS_MODELS} from '../data/LessonsData';

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


  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  return (
    <LayoutWrapper navigation={navigation}>
      {lessons.map((lesson, index) => {
        return (
          <Accordian
            key={index.toString()}
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
