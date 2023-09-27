import * as React from 'react';
import {Dimensions, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const originalWidth = 1001;
const originalHeight = 112;
const aspectRatio = originalWidth / originalHeight;
const windowWidth = Dimensions.get('window').width;
const SvgComponent = () => (
  <View style={{width: windowWidth, aspectRatio}}>
    <Svg width={1001} height={112} fill="none">
      <Path
        fill="#FFBD11"
        fillRule="evenodd"
        d="M1000.07.434H.075V112h.647C4.478 91.51 22.426 75.983 44 75.983h902c23.518 0 43.525 15.035 50.933 36.017h3.137V.434Z"
        clipRule="evenodd"
      />
    </Svg>
  </View>
);
export {SvgComponent as AppBarMobile};
