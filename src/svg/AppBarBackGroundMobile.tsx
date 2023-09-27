import * as React from 'react';
import {Dimensions, View} from 'react-native';
import Svg, {Defs, Image, Path, Pattern, Use} from 'react-native-svg';

const originalWidth = 1000;
const originalHeight = 272;
const aspectRatio = originalWidth / originalHeight;
const windowWidth = Dimensions.get('window').width;
const SvgComponent = () => (
  <View style={{width: windowWidth, aspectRatio}}>
    <Svg width="100%"
            height={"100%"}
            viewBox={`0 0 ${originalWidth} ${originalHeight}`} fill="none">
    <Path fill="url(#a)" d="M0 0h1000v271.468H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.00277 .0102)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAABiCAYAAACSyyI5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7d1NUlxVGMfh94Dl1I4r6B2oK1CSmCpnsgOzA9wBWUF0B50VGEeOsMgOcAWwAr06jAXHQyOVL5LQhND/Sp6HutTh0tXVo1+/dW5/tL43e1hVswIgy0b92PrercOxnBcAYfp8owCIJdIAwUQaIJhIAwQTaYBgIg0QTKQBgok0QDCRBggm0gDBRBogmEgDBBNpgGAiDRBMpAGCiTRAMJEGCCbSAMFEGiCYSAMEE2mAYCINEEykAYKJNEAwkQYIJtIAwUQaIJhIAwQTaYBgIg0QTKQBgok0QDCRBggm0gDBRBogmEgDBBNpgGAiDRBMpAGCiTRAMJEGCCbSAMFEGiCYSAMEE2mAYCINEEykAYKJNEAwkQYIJtIAwUQaIJhIAwQTaYBgIg0QTKQBgok0QDCRBggm0gDBRBogmEgDBBNpgGAiDRBMpAGCiTRAMJEGCCbSAMFEGiCYSAMEE2mAYCINEEykAYKJNECwT+r6HVWvg2r9aKynsZ5qcxwAH5LjmlUbR42jt3lVn1drX9Y1u45IjwD3xXiw+/V3PWnbkyADH6X+y2xWn9UXYzj9oap9M07N6x21vnfr8Ep31Pv+2CzZbbenJwXAK/rvs6/rpO2MIfb7upI+Xz3S4gywkv7bbF6f1sMxF68Y6z5f5cLh2F/uO+3utCXQAJfXvpuO2p1pu477/Tq9breCy0b6qJ72r0agfy4ArqTdmxajpVvLa3iXdJlIP65/RqDHM0EB8E6WU/Xtv7bGavcyt3/Lqzvaot35834BcK1GWx/0vc/Hqu++6XZvmKQFGuB9Og312ybqiyPd60CgAd6/Zah7PXrd/y+K9FH927cLgJux2XfqNa/6eDXSve+6SAhwc9rWNNXxxcPxS5Hui3Z3elQA3Kh2bzq4aH/6xUg/rQcFwHpsnJy+F+WFzz96LtJjirbNAbA2y22Paj89f+5ZpE3RAOv30jR9Fune903RAOt3Nk33xfnf55P0ogDIcFK/ni/PIr357AQA69W+nfbr/y2PjeVWx5ZvUwHI0h+f/j6dpA8KgCz9rM1jkq4/CoAsm7X8cpWN8XNYAKSxDQ2Q7j9AcqjvzUP2bAAAAABJRU5ErkJggg=="
        id="b"
        width={361}
        height={98}
      />
    </Defs>
    </Svg>
  </View>
);
export {SvgComponent as AppBarMobile};
