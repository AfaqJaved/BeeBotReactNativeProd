import {Text} from 'react-native';
import {isPortrait, useResponsiveFontSize, useResponsiveHeight, useResponsiveWidth} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export interface ParagraphProps {
  text: string;
  children?: any;
  flex ?: number;
  underline ?:boolean;
  fontColor ?: string;
  fontStyle ?: string;
}

export const Paragraph = (props: ParagraphProps) => {
  return (
    <Text
      style={{
        // marginBottom: useResponsiveWidth(7),
        flex : props.flex || 0,
        fontSize: useResponsiveFontSize(2),
        color: props.fontColor || CONSTANTS.COLORS.BLACK,
        lineHeight : 18,
        textAlign : "left",
        alignContent : "flex-start",
        textDecorationLine : props.underline ? "underline" : "none",
        fontStyle : props.fontStyle || "normal"
      }}>
      {props.text}
    </Text>
  );
};
