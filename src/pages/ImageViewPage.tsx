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
import {useResponsiveHeight, useResponsiveWidth} from '../utils/Utils';

import {LayoutWrapper} from '../components/LayoutWrapper';
import ImageViewer from 'react-native-image-zoom-viewer';

import FarmImageGrid from '../assets/img/fieldfarm.png';
import Cross from '../assets/img/cancel.png';
import {FIELD_MODELS} from '../data/FieldsData';

const ImageViewPage = ({navigation, route}: any) => {
  const image: any = route.params.image;
  const title: string = route.params.title;
  const images = [
    {
      url: '',
      props: {
        source: image,
      },
    },
  ];

  const getField = () => {
    const model = FIELD_MODELS.find(hold => {
      return hold.title === title;
    });
    console.log(model);
    return model;
  };

  return (
    <View style={{backgroundColor : "white"}}>
      <View
        style={{
          backgroundColor: 'white',
          width: useResponsiveWidth(95),
          height: useResponsiveHeight(10),
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FieldsView', {
              model: getField(),
            });
          }}>
          <Image source={Cross}></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: useResponsiveWidth(100),
          height: useResponsiveHeight(90),
        }}>
        <ImageViewer
          backgroundColor="white"
          enableImageZoom={true}
          style={{
            width: useResponsiveWidth(100),
            height: useResponsiveHeight(90),
          }}
          imageUrls={images}
        />
      </View>
    </View>
  );
};

export default ImageViewPage;
