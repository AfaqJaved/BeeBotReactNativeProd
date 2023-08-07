import { Text } from "react-native";
import { useResponsiveFontSize, useResponsiveWidth } from "../utils/Utils";
import { CONSTANTS } from "../constants/Contants";

export interface HeadingProps{
    text : string
    children? : any
}

export const Heading = (props : HeadingProps) => {
  return (
    <Text
      style={{
        marginBottom: useResponsiveWidth(2),
        fontSize: useResponsiveFontSize(3),
        color : CONSTANTS.COLORS.BLACK,
        fontWeight : '600'
      }}>
      {props.text}
    </Text>
  );
};
