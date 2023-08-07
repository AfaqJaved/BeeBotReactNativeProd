import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={23}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M22.557 3.542v5.03h-1.071v2.429a.75.75 0 0 1-.75.75H1.437a.75.75 0 0 1-.75-.75V1.115a.75.75 0 0 1 .75-.75h19.299a.75.75 0 0 1 .75.75v2.427h1.07Zm-2.571-1.677H2.187v8.386h17.799V1.865ZM5.206 9.133V2.952H3.35v6.182h1.858Zm3.108-6.182v6.182H6.456V2.952h1.858Zm2.863 6.182V2.952H9.318v6.182h1.859Z"
      clipRule="evenodd"
    />
  </Svg>
)
export { SvgComponent as BatterySvgMobile }
