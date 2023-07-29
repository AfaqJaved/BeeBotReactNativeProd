import {Text} from 'react-native';
import {useResponsiveFontSize, useResponsiveWidth} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';

export interface ParagraphProps {
  text: string;
  children?: any;
}

export const Paragraph = (props: ParagraphProps) => {
  return (
    <Text
      style={{
        marginBottom: useResponsiveWidth(3),
        fontSize: useResponsiveFontSize(2),
        color: CONSTANTS.COLORS.BLACK,
      }}>
      {props.text}
    </Text>
  );
};
