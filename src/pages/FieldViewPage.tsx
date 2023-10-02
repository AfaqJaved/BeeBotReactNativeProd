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
import {isPortrait, isTabletAndLandScape, isTabletAndPortrait, useResponsiveFontSize} from '../utils/Utils';
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
  const scrollRef = React.useRef<any>();

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  const scrollUp = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <LayoutWrapper scrollRef={scrollRef} navigation={navigation}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Fields')}
        style={{
          width: useResponsiveWidth(90),
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop : useResponsiveHeight(3)
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
            fontSize: isTabletAndPortrait()
            ? useResponsiveFontSize(2)
            : isTabletAndLandScape()
            ? useResponsiveFontSize(2)
            : useResponsiveFontSize(3.5),
            width: useResponsiveWidth(90),
            textAlign: 'left',
            fontFamily: 'Roboto-Bold',
            fontWeight: '700',
            color: CONSTANTS.COLORS.BLACK,
          }}>
          {t('fields_title').toUpperCase()}
          {isPortrait() ? '\n' : " "}
          {'«'}
          {t(model.title).toUpperCase()}
          {'»'}
        </Text>
      </View>
      <View
        style={{
          width: useResponsiveWidth(90),
          marginLeft : "auto",
          marginRight : "auto",
          marginBottom: useResponsiveWidth(3),
          marginTop: useResponsiveWidth(4),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ImageView', {
              imageMobile: model.gridImage,
              imageTablet : model.girdImageTablet,
              title: model.title,
            });
          }}>
          <Image
            resizeMode="cover"
            style={{
              aspectRatio : 1,
              // marginLeft: isPortrait() ? 'auto' : useResponsiveWidth(5),
              // marginRight: isPortrait() ? 'auto' : 0,
              width: isTabletAndPortrait()
              ? useResponsiveWidth(60)
              : isTabletAndLandScape()
              ? useResponsiveWidth(60)
              : useResponsiveWidth(90),
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
            fontSize:  isTabletAndPortrait()
            ? useResponsiveFontSize(1.5)
            : isTabletAndLandScape()
            ? useResponsiveFontSize(1.5)
            : useResponsiveFontSize(2),
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
            borderRadius: 3,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: isTabletAndPortrait()
              ? useResponsiveFontSize(1.5)
              : isTabletAndLandScape()
              ? useResponsiveFontSize(1.5)
              : useResponsiveFontSize(2),
              color: CONSTANTS.COLORS.WHITE,
              fontStyle: 'italic',
            }}>
            {t('art')} : {model.artNo}
          </Text>
        </View>
        {/* Main Content */}
        <View>
          {model.content.map((content, index) => {
            return (
              <View key={index}>
                <View style={{marginTop : isPortrait() ? useResponsiveHeight(4): useResponsiveHeight(8)}}></View>
                <Heading text={t(content.heading).toUpperCase()}></Heading>
                <Paragraph text={t(content.paragraph)}></Paragraph>
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          onPress={() => {
            scrollUp();
          }}
          style={{
            width: useResponsiveWidth(90),
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: isPortrait() ? useResponsiveHeight(4) : useResponsiveHeight(8),
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
            {t('up')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Fields')}
          style={{
            width: useResponsiveWidth(90),
            marginTop: isPortrait() ? useResponsiveHeight(3) : useResponsiveHeight(6),
            marginLeft: 'auto',
            marginRight: 'auto',
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
            {t('back_to_fields')}
          </Text>
        </TouchableOpacity>
      </View>
    </LayoutWrapper>
  );
};

export default FieldsViewPage;
