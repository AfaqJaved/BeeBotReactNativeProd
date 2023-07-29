import React, {useReducer, useTransition} from 'react';
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
  Linking,
} from 'react-native';
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {isPortrait} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {MenuItem} from '../components/Menu';

import Lessons from '../assets/img/lessons.png';
import Fields from '../assets/img/fields.png';
import Control from '../assets/img/control.png';
import Scratch from '../assets/img/scetch.png';
import Add from '../assets/img/add.png';

import LandLessons from '../assets/img/lessons1.png';
import LandFields from '../assets/img/fields_mv1.png';
import LandControl from '../assets/img/control_mv1.png';
import LandScratch from '../assets/img/scretch_mv2.png';
import LandAdd from '../assets/img/add_mv1.png';
import {useTranslation} from 'react-i18next';
import i18n from '../../translation';
import {LangDialog} from '../dialog/LangDialog';
import {LayoutWrapper} from '../components/LayoutWrapper';

const HomePage = ({navigation}: any) => {
  const {t} = useTranslation();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const mainContentWidth = useResponsiveWidth(100);
  const mainContentHeight = isPortrait()
    ? useResponsiveHeight(80)
    : useResponsiveHeight(70);

  React.useEffect(() => {
    i18n.changeLanguage('ru');
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);

  return (
    <LayoutWrapper navigation={navigation}>
      <MenuItem
        image={isPortrait() ? Lessons : LandLessons}
        width={90}
        heightLand={70}
        heightPort={25}
        label={t('lessons')}
        onClick={() => {
          navigation.navigate('Lessons');
        }}></MenuItem>

      <View
        style={{
          flexDirection: 'row',
          marginTop: useResponsiveWidth(2),
          justifyContent: 'center',
        }}>
        <MenuItem
          image={isPortrait() ? Fields : LandFields}
          width={44}
          heightLand={70}
          heightPort={33}
          label={t('fields')}
          onClick={() => {
            navigation.navigate("Fields")
          }}></MenuItem>

        <View style={{width: useResponsiveWidth(2)}}></View>

        <MenuItem
          image={isPortrait() ? Control : LandControl}
          width={44}
          heightLand={70}
          heightPort={33}
          label={t('remote')}
          onClick={() => {
            navigation.navigate('Control');
          }}></MenuItem>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: useResponsiveWidth(2),
          justifyContent: 'center',
        }}>
        <MenuItem
          image={isPortrait() ? Scratch : LandScratch}
          width={44}
          heightLand={70}
          heightPort={33}
          label={t('scratch')}
          onClick={() => {
            Linking.openURL(CONSTANTS.SCRATCH_URL).catch(err =>
              console.error("Couldn't load page", err),
            );
          }}></MenuItem>

        <View style={{width: useResponsiveWidth(2)}}></View>

        <MenuItem
          image={isPortrait() ? Add : LandAdd}
          width={44}
          heightLand={70}
          heightPort={33}
          label={t('materials')}
          onClick={() => {
            console.log('called');
          }}></MenuItem>
      </View>

      <View style={{height: useResponsiveHeight(1)}}></View>
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    margin: 5,
  },
});

export default HomePage;
