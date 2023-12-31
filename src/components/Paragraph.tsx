import {Text} from 'react-native';
import {
  isPortrait,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export interface ParagraphProps {
  text: string;
  children?: any;
  flex?: number;
  underline?: boolean;
  fontColor?: string;
  fontStyle?: string;
  textAlign ?: string;
  fontWeight ?: number
}

export const Paragraph = (props: ParagraphProps) => {
  return (
    <Text
      style={{
        // marginBottom: useResponsiveWidth(7),
        flex: props.flex || 0,
        fontWeight : props.fontWeight || 400,
        fontSize: isTabletAndPortrait()
          ? useResponsiveFontSize(1.5)
          : isTabletAndLandScape()
          ? useResponsiveFontSize(1.5)
          : useResponsiveFontSize(2),
        color: props.fontColor || CONSTANTS.COLORS.BLACK,
        lineHeight: isTabletAndPortrait()
          ? useResponsiveFontSize(2.2)
          : isTabletAndLandScape()
          ? useResponsiveFontSize(1.5)
          : useResponsiveFontSize(2.2),
        textAlign: props.textAlign || 'left',
        alignContent: 'flex-start',
        textDecorationLine: props.underline ? 'underline' : 'none',
        fontStyle: props.fontStyle || 'normal',
      }}>
      {props.text}
      {props.children}
    </Text>
  );
};
