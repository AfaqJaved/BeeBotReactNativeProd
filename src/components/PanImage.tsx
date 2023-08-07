import React, {useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

export interface PanImageProps {
  image: any;
  scale: number;
  setScale: (scale: number) => void;
}

const PanImage = ({image, scale, setScale}: any) => {
  const imageRef = React.useRef<any>();
  const [position, setPosition] = React.useState({x: 0, y: 0});
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setScale(3);
        }}>
          <PanGestureHandler
            onGestureEvent={async event => {
              console.log("called");
              const x = event.nativeEvent.translationX;
              const y = event.nativeEvent.translationY;
              await setPosition({
                x: position.x + event.nativeEvent.translationX/30,
                y: position.y + event.nativeEvent.translationY/30,
              });
            }}>
            <Image
              ref={imageRef}
              source={image}
              style={{
                transform: [
                  {scale},
                  {translateX: position.x},
                  {translateY: position.y},
                ],
              }}
            />
          </PanGestureHandler>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PanImage;
