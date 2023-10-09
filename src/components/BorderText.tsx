import {View} from 'react-native';
import {isPortrait, useResponsiveWidth} from '../utils/Utils';
import {Paragraph} from './Paragraph';
import {SubHeading} from './SubHeading';

interface Props {
  title: string;
  text: string;
  borderColor: string;
  children ?: any;
}

export const BorderText = (props: Props) => {
  return (
    <View
      style={{
        marginTop: isPortrait()
          ? useResponsiveWidth(5)
          : useResponsiveWidth(2.5),
        borderColor: props.borderColor,
        borderWidth: 2,
        padding: 10,
        borderRadius: 7,
      }}>
      <SubHeading text={props.title}></SubHeading>
      <Paragraph text={props.text}></Paragraph>

      {props.children}
    </View>
  );
};
