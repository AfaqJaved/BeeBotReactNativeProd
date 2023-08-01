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
  Modal,
} from 'react-native';

import {LayoutWrapper} from '../components/LayoutWrapper';
import Pdf from 'react-native-pdf';
import PdfFile from '../assets/pdf/lesson.pdf';
import {
  isPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {useTranslation} from 'react-i18next';
import {RoundedButton} from '../components/RoundedButton';

const PdfViewPage = ({navigation, route}: any) => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const {t} = useTranslation();

  React.useEffect(() => {
    Dimensions.addEventListener('change', () => {
      forceUpdate();
    });
  }, []);
  return (
    <LayoutWrapper enableScroll={false} navigation={navigation}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Lessons')}
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
          {t('back_to_lessons')}
        </Text>
      </TouchableOpacity>
        <Pdf
          trustAllCerts={false}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          enableAntialiasing={true}
          onLoadProgress={()=>{

          }}
          scale={isPortrait() ? 1 : 2.5}
          showsVerticalScrollIndicator={false}
          source={PdfFile}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={{
            width: useResponsiveWidth(100),
            height: useResponsiveHeight(50),
          }}
        />
      <View
        style={{
          marginBottom: useResponsiveHeight(10),
          marginTop: useResponsiveHeight(10),
          width: useResponsiveWidth(50),
          marginLeft : "auto",
          marginRight : "auto"
        }}>
        <RoundedButton
          backgroundColor={CONSTANTS.COLORS.GREEN}
          onClick={() => {

          }}
          label={t('download_pdf')}></RoundedButton>
      </View>
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default PdfViewPage;
