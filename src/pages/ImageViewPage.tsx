import React, {
  useReducer,
  useTransition,
  useRef,
  createRef,
  useState,
} from 'react';
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
  Animated,
  PanResponder,
} from 'react-native';
import {
  getResponsiveResource,
  isPortrait,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';

import {LayoutWrapper} from '../components/LayoutWrapper';
import ImageViewer from 'react-native-image-zoom-viewer';

import FarmImageGrid from '../assets/img/fieldfarm.png';
import CrossMobile from '../assets/img/cancel_mobile.png';
import CrossTablet from '../assets/img/cancel_tablet.png';
import ZoomMobile from '../assets/img/zoom_mobile.png';
import ZoomTablet from '../assets/img/zoom_tablet.png';
import ZoomTabletLarge from '../assets/img/zoom_tabletlg.png';
import {FIELD_MODELS} from '../data/FieldsData';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import PanImage from '../components/PanImage';
import {CONSTANTS} from '../constants/Contants';

const ImageViewPage = ({navigation, route}: any) => {
  const image: any = route.params.imageMobile;
  const imageTablet: any = route.params.imageTablet;
  const ratio: any = route.params.ratio;
  const title: string = route.params.title;
  const [currentScale, setScale] = React.useState(0);

  const getField = () => {
    const model = FIELD_MODELS.find(hold => {
      return hold.title === title;
    });
    console.log(model);
    return model;
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          width: useResponsiveWidth(100),
          height: useResponsiveHeight(100),
        }}>
        <View
          style={{
            zIndex: 2,
            width: useResponsiveWidth(95),
            height: useResponsiveHeight(10),
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{marginRight: useResponsiveWidth(3)}}
            onPress={() => {
              if (currentScale === 0) {
                setScale(1);
              } else {
                setScale(0);
              }
            }}>
            <Image
              source={getResponsiveResource(
                ZoomMobile,
                ZoomTablet,
                ZoomTablet,
              )}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FieldsView', {
                model: getField(),
              });
            }}>
            <Image
              source={getResponsiveResource(
                CrossMobile,
                CrossTablet,
                CrossTablet,
              )}></Image>
          </TouchableOpacity>
        </View>

        {currentScale === 0 ? (
          <TouchableOpacity
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 'auto',
              marginBottom: 'auto',
            }}
            onPress={() => setScale(1)}>
            <Image
              resizeMode={'cover'}
              style={{
                aspectRatio: ratio,
                width : ratio != 0.9 ? useResponsiveWidth(15) : useResponsiveWidth(90),
                height : ratio != 0.9 ? useResponsiveHeight(15) : isPortrait() ? useResponsiveHeight(40) : useResponsiveHeight(60),
                borderRadius: 10,
              }}
              source={imageTablet}></Image>
          </TouchableOpacity>
        ) : (
          <PanImage
            setScale={(scale: number) => {
              setScale(scale);
            }}
            image={imageTablet}
            scale={currentScale}></PanImage>
        )}
      </View>
    </View>
  );
};

export default ImageViewPage;
