import React, {useEffect, useReducer, useTransition} from 'react';
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
import {isPortrait, useResponsiveFontSize} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {MenuItem} from '../components/Menu';

import {useResponsiveHeight, useResponsiveWidth} from '../utils/Utils';
import {Accordian} from '../components/Accordian';
import {LayoutWrapper} from '../components/LayoutWrapper';
import {AccordianFields} from '../components/AccordianFields';

import {useTranslation} from 'react-i18next';
import {Heading} from '../components/Heading';
import {Paragraph} from '../components/Paragraph';
import {FieldModel} from '../models/FieldsModel';

const FieldsViewPage = ({navigation, route}: any) => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const {t} = useTranslation();
  const model: FieldModel = route.params.model;

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  return (
    <LayoutWrapper navigation={navigation}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Fields')}
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Text
          style={{
            fontSize: useResponsiveFontSize(2.5),
            width: useResponsiveWidth(90),
            textAlign: 'right',
            color: CONSTANTS.COLORS.GRAY,
          }}>
          {t('back_to_fields')}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: useResponsiveWidth(4),
          marginTop: useResponsiveWidth(4),
        }}>
        <Text
          style={{
            fontSize: useResponsiveFontSize(4),
            width: useResponsiveWidth(90),
            textAlign: 'left',
            fontFamily: 'Roboto-Bold',
            fontWeight: '700',
            color: CONSTANTS.COLORS.BLACK,
          }}>
          {t('fields_title')}
          {'\n'}
          {'<<'}
          {t(model.title)}
          {'>>'}
        </Text>
      </View>
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: isPortrait() ? 'auto' : 0,
          marginRight: isPortrait() ? 'auto' : 0,
          marginBottom: useResponsiveWidth(3),
          marginTop: useResponsiveWidth(4),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ImageView', {
              image: model.gridImage,
              title: model.title,
            });
          }}>
          <Image
            resizeMode="cover"
            style={{
              marginLeft: isPortrait() ? 'auto' : useResponsiveWidth(5),
              marginRight: isPortrait() ? 'auto' : 0,
              width: isPortrait()
                ? useResponsiveWidth(90)
                : useResponsiveWidth(50),
              height : isPortrait() ? useResponsiveHeight(50) : useResponsiveHeight(70),
              backgroundColor: 'red',
              borderRadius: 10,
            }}
            source={model.gridImage}></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: isPortrait() ? 'auto' : 0,
          marginRight: isPortrait() ? 'auto' : 0,
          marginBottom: useResponsiveWidth(4),
        }}>
        <Text
          style={{
            fontSize: useResponsiveFontSize(2),
            color: CONSTANTS.COLORS.GRAY,
            width: useResponsiveWidth(90),
            marginLeft: isPortrait() ? 'auto' : useResponsiveWidth(5),
            marginRight: isPortrait() ? 'auto' : 0,
          }}>
          {t('click_to_large')}
        </Text>
      </View>
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            marginLeft: 'auto',
            backgroundColor: CONSTANTS.COLORS.RED,
            padding: 10,
            width: isPortrait()
              ? useResponsiveWidth(45)
              : useResponsiveWidth(30),
            marginRight: isPortrait() ? 0 : 'auto',
            marginBottom: useResponsiveWidth(10),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: useResponsiveFontSize(2),
              color: CONSTANTS.COLORS.WHITE,
            }}>
            {t('art')} : {model.artNo}
          </Text>
        </View>
        {/* Main Content */}
        <View>
          {model.content.map((content, index) => {
            return (
              <View key={index}>
                <Heading text={t(content.heading)}></Heading>
                <Paragraph text={t(content.paragraph)}></Paragraph>
              </View>
            );
          })}
        </View>
      </View>
    </LayoutWrapper>
  );
};

export default FieldsViewPage;
