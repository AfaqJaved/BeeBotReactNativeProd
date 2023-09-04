import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { CONSTANTS } from "../constants/Contants";
import { useResponsiveWidth, useResponsiveFontSize } from "../utils/Utils";

export interface LessonContentLinksProps {
    onClick : () => void;
    text : string;
}



export const LessonContentLinks = (props : LessonContentLinksProps) => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <Text
        style={{
          marginBottom: useResponsiveWidth(2.5),
          fontSize: useResponsiveFontSize(2),
          color: CONSTANTS.COLORS.BLACK,
          textDecorationLine: 'underline',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
