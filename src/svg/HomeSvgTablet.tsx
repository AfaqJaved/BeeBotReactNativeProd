import * as React from "react"
import Svg, { SvgProps, Path, Rect } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={2}
      d="M5.13 37.358v-19.28a.5.5 0 0 1 .165-.37l14.5-13.181a.5.5 0 0 1 .672 0l14.5 13.182a.49.49 0 0 1 .164.365v19.293a.492.492 0 0 1-.5.49h-29a.5.5 0 0 1-.5-.5Z"
    />
    <Rect
      width={10}
      height={13.333}
      x={15.131}
      y={24.221}
      stroke="#000"
      strokeWidth={2}
      rx={0.5}
    />
  </Svg>
)
export { SvgComponent as HomeSvgTablet }
