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
import {isPortrait, useResponsiveFontSize} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {MenuItem} from '../components/Menu';

import {useResponsiveHeight, useResponsiveWidth} from '../utils/Utils';
import {Accordian} from '../components/Accordian';
import {LayoutWrapper} from '../components/LayoutWrapper';
import {AccordianFields} from '../components/AccordianFields';

import Blocks from '../assets/img/blocks.png';
import Group from '../assets/img/Group.png';
import FairyTale from '../assets/img/fairytale1.png';
import Alphabets from '../assets/img/Maskgroup.png';
import Sea from '../assets/img/sea1.png';
import Beach from '../assets/img/beach1.png';
import Farm from '../assets/img/farm1.png';
import Search from '../assets/img/search.png';

import {useTranslation} from 'react-i18next';
import {FIELD_MODELS} from '../data/FieldsData';
import {FieldModel} from '../models/FieldsModel';

const FieldsPage = ({navigation}: any) => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const mainContentWidth = useResponsiveWidth(100);
  const mainContentHeight = isPortrait()
    ? useResponsiveHeight(85)
    : useResponsiveHeight(70);
  const roudedBorderWidth = useResponsiveWidth(100);
  const roudedBorderHeight = useResponsiveHeight(6);
  const roudedBorderMarginTop = useResponsiveHeight(-3);

  const [visibility, setVisibility] = React.useState(false);
  const [visibility1, setVisibility1] = React.useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  return (
    <LayoutWrapper navigation={navigation}>
      <View style={{position: 'relative', padding: 10}}>
        <Image
          source={Search}
          style={{
            position: 'absolute',
            padding: 10,
            left: useResponsiveWidth(5),
            top: isPortrait() ? useResponsiveHeight(2) : useResponsiveHeight(5),
          }}
        />
        <TextInput
          placeholder="Search"
          textAlign="center"
          textAlignVertical="top"
          style={{
            width: useResponsiveWidth(90),
            height: isPortrait()
              ? useResponsiveHeight(5)
              : useResponsiveHeight(10),
            marginLeft: 'auto',
            textAlign: 'center',
            marginRight: 'auto',
            marginBottom: useResponsiveHeight(2),
            fontSize: useResponsiveFontSize(3),
            borderBottomColor: '#8C8989',
            borderBottomWidth: 2,
          }}></TextInput>
      </View>

      {FIELD_MODELS.map((model,index) => {
        return (
          <TouchableOpacity key={index}
            onPress={() => navigation.navigate('FieldsView', {model: model})}>
            <AccordianFields
              backgroundColor={model.backgroundColor}
              image={model.imageSource}
              artNo={model.artNo}
              title={t(model.title)}></AccordianFields>
          </TouchableOpacity>
        );
      })}
    </LayoutWrapper>
  );
};

export default FieldsPage;
