import {CONSTANTS} from '../constants/Contants';
import {
  getResponsiveResource,
  isPortrait,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import RadioOffMobile from '../assets/img/radio_off_mobile.png';
import RadioOffTablet from '../assets/img/radio_off_tablet.png';
import RadioOnMobile from '../assets/img/radio_on_mobile.png';
import RadioOnTablet from '../assets/img/radio_on_tablet.png';
import {RoundedButton} from './RoundedButton';

export interface BleItemProps {
  isConnecting: boolean;
  connected: boolean;
  deviceName: string;
  onConnectClick: any;
  onDisconnectClick: any;
}

export const BleItem = (props: BleItemProps) => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        width: useResponsiveWidth(95),
        height: isPortrait() ? useResponsiveHeight(8) : useResponsiveHeight(15),
        flexDirection: 'row',
        borderBottomColor: CONSTANTS.COLORS.BLACK,
        borderBottomWidth: useResponsiveHeight(0.2),
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      {props.connected ? (
        <Image source={getResponsiveResource(RadioOnMobile,RadioOnTablet,RadioOnTablet)}></Image>
      ) : (
        <Image source={getResponsiveResource(RadioOffMobile,RadioOffTablet,RadioOffTablet)}></Image>
      )}
      <Text style={{color: 'black', fontSize: isTabletAndPortrait()
              ? useResponsiveFontSize(1.5)
              : isTabletAndLandScape()
              ? useResponsiveFontSize(1.5)
              : useResponsiveFontSize(2.5)}}>
        {props.deviceName}
      </Text>
      {/* <Text
        style={{
          color: CONSTANTS.COLORS.GRAY,
          fontSize: useResponsiveFontSize(1.5),
        }}>
        {props.connected ? t('connected') : t('disconnected')}
      </Text> */}
      {props.isConnecting ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : props.connected ? (
        <RoundedButton
          onClick={props.onDisconnectClick}
          label="disconnect"
          backgroundColor={CONSTANTS.COLORS.RED}></RoundedButton>
      ) : (
        <RoundedButton
          onClick={props.onConnectClick}
          label="connect"
          backgroundColor={CONSTANTS.COLORS.GREEN}></RoundedButton>
      )}
    </View>
  );
};
