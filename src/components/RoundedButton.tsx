import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {CONSTANTS} from '../constants/Contants';
import {isTabletAndLandScape, isTabletAndPortrait, useResponsiveFontSize} from '../utils/Utils';

import {useTranslation} from 'react-i18next';

export interface RoundedButtonProps {
    label : string;
    backgroundColor : string
    onClick : ()=> void
}



export const RoundedButton = (props : RoundedButtonProps) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
    onPress={props.onClick}
      style={{
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        backgroundColor: props.backgroundColor,
      }}>
      <Text
        style={{
          fontSize: isTabletAndPortrait()
          ? useResponsiveFontSize(1.5)
          : isTabletAndLandScape()
          ? useResponsiveFontSize(1.5)
          : useResponsiveFontSize(2),
          color: CONSTANTS.COLORS.WHITE,
        }}>
        {t(props.label)}
      </Text>
    </TouchableOpacity>
  );
};
