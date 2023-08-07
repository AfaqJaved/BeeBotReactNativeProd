import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={20}
    height={37}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.13 10.388 17 17-8.5 8.5v-34l8.5 8.5-17 17"
    />
  </Svg>
)
export { SvgComponent as BleSvgTablet }
