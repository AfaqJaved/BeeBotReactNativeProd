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
  isTablet,
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

import LandLessons from '../assets/img/lessons_tablet.png';
import LandFields from '../assets/img/fields_tablet.png';
import LandControl from '../assets/img/control_tablet.png';
import LandScratch from '../assets/img/scratch_tablet.png';
import LandAdd from '../assets/img/materials_tablet.png';
import {useTranslation} from 'react-i18next';
import i18n from '../../translation';
import {LangDialog} from '../dialog/LangDialog';
import {LayoutWrapper} from '../components/LayoutWrapper';

const HomePage = ({navigation}: any) => {
  const {t} = useTranslation();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


  React.useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);


  return (
    <LayoutWrapper navigation={navigation}>

      <View style={{flexDirection : 'row' , flexWrap : "wrap" , justifyContent : "center",rowGap : useResponsiveWidth(1),columnGap : useResponsiveWidth(1.5),marginTop : useResponsiveHeight(3)}}>
      <MenuItem
        image={isPortrait() ? Lessons : LandLessons}
        width={!isTablet() ? 90 : 60}
        heightLand={isTablet() ? 30 : 50}
        heightPort={!isTablet() ? 25 : 25}
        label={t('lessons')}
        onClick={() => {
          navigation.navigate('Lessons');
        }}></MenuItem>


        <MenuItem
          image={isPortrait() ? Fields : LandFields}
          width={!isTablet() ? 44 : 30}
          heightLand={isTablet() ? 30 : 50}
          heightPort={!isTablet() ? 33 : 25}
          label={t('fields')}
          onClick={() => {
            navigation.navigate("Fields")
          }}></MenuItem>


        <MenuItem
          image={isPortrait() ? Control : LandControl}
          width={!isTablet() ? 44 : 29.5}
          heightLand={isTablet() ? 30 : 50}
          heightPort={!isTablet() ? 33 : 25}
          label={t('remote')}
          onClick={() => {
            navigation.navigate('Control');
          }}></MenuItem>


        <MenuItem
          image={isPortrait() ? Scratch : LandScratch}
          width={!isTablet() ? 44 : 29.5}
          heightLand={isTablet() ? 30 : 50}
          heightPort={!isTablet() ? 33 : 25}
          label={t('scratch')}
          onClick={() => {
            Linking.openURL(CONSTANTS.SCRATCH_URL).catch(err =>
              console.error("Couldn't load page", err),
            );
          }}></MenuItem>


        <MenuItem
          image={isPortrait() ? Add : LandAdd}
          width={!isTablet() ? 44 : 29.5}
          heightLand={isTablet() ? 30 : 50}
          heightPort={!isTablet() ? 33 : 25}
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
