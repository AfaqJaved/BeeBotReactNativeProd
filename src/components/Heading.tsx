import { Text } from "react-native";
import { isTabletAndLandScape, isTabletAndPortrait, useResponsiveFontSize, useResponsiveWidth } from "../utils/Utils";
import { CONSTANTS } from "../constants/Contants";

export interface HeadingProps{
    text : string
    children? : any
    ref ?: any
}

export const Heading = (props : HeadingProps) => {
  return (
    <Text
      ref={props.ref}
      style={{
        marginBottom: useResponsiveWidth(2),
        fontSize: isTabletAndPortrait() ? useResponsiveFontSize(2) : isTabletAndLandScape() ? useResponsiveFontSize(2) : useResponsiveFontSize(3),
        color : CONSTANTS.COLORS.BLACK,
        fontWeight : '600'
      }}>
      {props.text}
    </Text>
  );
};
