import { Text } from "react-native";
import { useResponsiveFontSize, useResponsiveWidth } from "../utils/Utils";
import { CONSTANTS } from "../constants/Contants";

export interface SubHeadingProps{
    text : string
    children? : any;
    flex ?: number;
    fontStyle ?: string;
    fontWeight ?: string;
}

export const SubHeading = (props : SubHeadingProps) => {
  return (
    <Text
      style={{
        marginBottom: useResponsiveWidth(2),
        fontSize: useResponsiveFontSize(2),
        color : CONSTANTS.COLORS.BLACK,
        fontWeight : props.fontWeight || '600',
        flex : props.flex || 0,
        fontStyle : props.fontStyle || "normal"
      }}>
      {props.text}
    </Text>
  );
};
