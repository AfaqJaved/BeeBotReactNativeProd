import * as React from "react"
import Svg, { SvgProps, Path, Rect } from "react-native-svg"




const HomeSvgMobile = () => (
  <Svg
    width={25}
    height={25}
    fill="none"
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M3.435 22.15V10.87a.5.5 0 0 1 .163-.37l8.5-7.726a.5.5 0 0 1 .673 0l8.5 7.727a.49.49 0 0 1 .164.365v11.287a.497.497 0 0 1-.5.497h-17a.5.5 0 0 1-.5-.5Z"
    />
    <Rect
      width={6}
      height={8}
      x={9.435}
      y={14.468}
      stroke="#000"
      strokeWidth={1.5}
      rx={0.5}
    />
  </Svg>
)
export default HomeSvgMobile
