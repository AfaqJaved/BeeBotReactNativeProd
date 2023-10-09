import { View, Text } from "react-native";
import { isPortrait, useResponsiveWidth, isTabletAndPortrait, useResponsiveFontSize, isTabletAndLandScape } from "../utils/Utils";
import { Paragraph } from "./Paragraph";
import { SubHeading } from "./SubHeading";

interface Props {
  number: string;
  heading: string;
  text: string;
  color : string;
}
export default function LineText(props: Props) {
  return (
    <View
      style={{
        marginTop: isPortrait()
          ? useResponsiveWidth(3)
          : useResponsiveWidth(1.5),
      }}>
      <Text
        style={{
          fontSize: isTabletAndPortrait()
            ? useResponsiveFontSize(1.5)
            : isTabletAndLandScape()
            ? useResponsiveFontSize(1.5)
            : useResponsiveFontSize(2),
          padding: 10,
          color: props.color,
          textAlign: 'right',
          fontStyle: 'normal',
        }}>
        {props.number}
      </Text>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: props.color,
        }}></View>
      <View
        style={{
          marginTop: isPortrait()
            ? useResponsiveWidth(2)
            : useResponsiveWidth(1),
          marginBottom: isPortrait()
            ? useResponsiveWidth(2)
            : useResponsiveWidth(1),
        }}>
        <SubHeading
          color={props.color}
          text={props.heading}></SubHeading>
      </View>
      <Paragraph text={props.text}></Paragraph>
    </View>
  );
}
