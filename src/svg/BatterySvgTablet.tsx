import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={19}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M5.561.057h8.14v1.946h3.928a1 1 0 0 1 1 1v31.228a1 1 0 0 1-1 1H1.632a1 1 0 0 1-1-1V3.003a1 1 0 0 1 1-1h3.929V.057ZM2.632 4.003v29.228H16.63V4.003H2.632Zm11.976 25H4.605v3.008h10.003v-3.007ZM4.605 23.976h10.003v3.007H4.605v-3.007Zm10.003-4.631H4.605v3.006h10.003v-3.006Z"
      clipRule="evenodd"
    />
  </Svg>
)
export { SvgComponent as BatterySvgTablet }
