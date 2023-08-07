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
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';

import {LayoutWrapper} from '../components/LayoutWrapper';
import ImageViewer from 'react-native-image-zoom-viewer';

import FarmImageGrid from '../assets/img/fieldfarm.png';
import Cross from '../assets/img/cancel.png';
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

const ImageViewPage = ({navigation, route}: any) => {
  const image: any = route.params.image;
  const title: string = route.params.title;
  const [panEnabled, setPanEnabled] = useState(false);
  const [currentScale, setScale] = React.useState(1);
  const [XValue, setXValue] = React.useState(0);
  const [YValue, setYValue] = React.useState(0);
  const [translateX, setTranslateX] = React.useState(0);
  const [translateY, setTranslateY] = React.useState(0);
  const imageRef = useRef();

  const scale = useRef(new Animated.Value(2)).current;
  // let translateX = new Animated.Value(0);
  // let translateY = new Animated.Value(0);

  const pinchRef = createRef();
  const panRef = createRef();

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: {scale},
      },
    ],
    {useNativeDriver: true},
  );

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const initialPositionX = 0; // Replace with the actual initial X position of the image.
        const initialPositionY = 0; // Replace with the actual initial Y position of the image.

        const newPositionX = initialPositionX + gestureState.dx;
        const newPositionY = initialPositionY + gestureState.dy;

        setTranslateX(newPositionX);
        setTranslateY(newPositionY);
      },
      onPanResponderRelease: () => {},
    }),
  ).current;

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
          height: useResponsiveHeight(90),
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
              if (currentScale == 3) {
                setScale(1);
              } else {
                setScale(3);
              }
              // setPanEnabled(true);
            }}>
            <Image
              source={getResponsiveResource(
                ZoomMobile,
                ZoomTablet,
                ZoomTabletLarge,
              )}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FieldsView', {
                model: getField(),
              });
            }}>
            <Image source={Cross}></Image>
          </TouchableOpacity>
        </View>

        <PanImage
          setScale={(scale: number) => {
            setScale(scale);
          }}
          image={image}
          scale={currentScale}></PanImage>

        {/* <Image source={image} ref={imageRef} resizeMode='contain' ></Image> */}

        {/* <ImageViewer
          backgroundColor="white"
          enableImageZoom={true}
          maxScale={3}
          minScale={3}
          onClick={() => {
          }}
          onDoubleClick={() => {}}
          style={{
            width: useResponsiveWidth(100),
            height: useResponsiveHeight(90),
          }}
          imageUrls={images}
        /> */}
      </View>
    </View>
  );
};

export default ImageViewPage;

// <GestureHandlerRootView>

// <PanGestureHandler
//   onGestureEvent={event => {
//     // setTranslateX(event.nativeEvent.translationX);
//     // setTranslateY(event.nativeEvent.translationY);
//   }}
//   ref={panRef}
//   // simultaneousHandlers={[pinchRef]}
//   enabled={panEnabled}
//   // failOffsetX={[-1000, 1000]}
//   shouldCancelWhenOutside={false}>
//   <Animated.View>
//      <PinchGestureHandler
//       ref={pinchRef}
//       onGestureEvent={onPinchEvent}
//       simultaneousHandlers={[panRef]}
//       onHandlerStateChange={handlePinchStateChange}
//     >
//     <Animated.Image
//       source={image}
//       style={{
//         width: '100%',
//         height: '100%',
//         transform: [
//           {scale: currentScale},
//           {translateX},
//           {translateY},
//         ],
//       }}
//       resizeMode="contain"
//     />
//     </PinchGestureHandler>
//    </Animated.View>
// </PanGestureHandler>
// </GestureHandlerRootView>
