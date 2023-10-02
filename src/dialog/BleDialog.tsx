import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import {
  getLocalFromList,
  getResponsiveResource,
  isPortrait,
  isTabletAndLandScape,
  isTabletAndPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import i18n from '../../translation';
import React from 'react';
import {useTranslation} from 'react-i18next';

import CrossTablet from '../assets/img/cancel_tablet.png';
import CrossMobile from '../assets/img/cancel_mobile.png';
import RefreshMobile from '../assets/img/update_mobile.png';
import RefreshTablet from '../assets/img/update_tablet.png';
import RadioOff from '../assets/img/radio_off.png';
import {BleItem} from '../components/BleItem';
import {CustomBleManger} from '../ble/BleManager';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducer} from '../redux/Store';
import {ISCONNECTING, PUSHDEVICE} from '../redux/Actions';
import {Characteristic} from 'react-native-ble-plx';
import {RoundedButton} from '../components/RoundedButton';

export interface LangProps {
  visible: boolean;
  onClose: () => void;
  children?: any;
}

export interface Language {
  id: string;
  title: string;
}

const data: Language[] = [
  {
    id: '1',
    title: 'English (EN)',
  },
  {
    id: '2',
    title: 'Russian (RU)',
  },
];

export const BleDialog = ({visible, onClose}: LangProps) => {
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);
  const {t} = useTranslation();
  const foundDevices = useSelector(
    (state: RootReducer) => state.bleReducer.foundDevices,
  );
  const isScanning = useSelector(
    (state: RootReducer) => state.bleReducer.isScanning,
  );
  const connectedDevice = useSelector(
    (state: RootReducer) => state.bleReducer.connectedDevice,
  );
  // const connectedDevice = true;
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(isScanning);
  }, [isScanning]);

  return visible ? (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        position: 'absolute',
        zIndex: 1000,
        elevation: 5,
        bottom: 0,
        left: useResponsiveWidth(2.5),
        right: useResponsiveWidth(2.5),
        width: useResponsiveWidth(95),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: CONSTANTS.COLORS.WHITE,
        height: isPortrait()
          ? useResponsiveHeight(70)
          : useResponsiveHeight(90),
      }}>
      <View
        style={{
          width: useResponsiveWidth(95),
          height: useResponsiveHeight(3),
          flexDirection: 'row',
          padding: 20,
          marginBottom: useResponsiveWidth(2),
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={async () => {
            CustomBleManger.getInstance().startScanning();
          }}>
          {!isScanning ? (
            <Image
              resizeMode="cover"
              source={getResponsiveResource(
                RefreshMobile,
                RefreshTablet,
                RefreshTablet,
              )}
            />
          ) : (
            ''
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <Image
            resizeMode="cover"
            source={getResponsiveResource(
              CrossMobile,
              CrossTablet,
              CrossTablet,
            )}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: isTabletAndPortrait()
            ? useResponsiveFontSize(1.5)
            : isTabletAndLandScape()
            ? useResponsiveFontSize(1.5)
            : useResponsiveFontSize(2),
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {t('ble_dialog_title')}
      </Text>
      <View
        style={{
          backgroundColor: CONSTANTS.COLORS.BLACK,
          width: useResponsiveWidth(95),
          marginTop: useResponsiveHeight(2),
          height: useResponsiveHeight(0.2),
        }}></View>
      <View
        style={{
          height: isPortrait()
            ? useResponsiveHeight(30)
            : useResponsiveHeight(20),
          marginBottom: isPortrait() ? useResponsiveHeight(5) : 0,
        }}>
        {/* <BleItem
          onConnectClick={() => {}}
          onDisconnectClick={() => {}}
          connected={false}
          deviceName={'Logobot123123123'}
          isConnecting={false}></BleItem> */}
        <FlatList
          data={foundDevices}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => {
            return (
              <BleItem
                onConnectClick={() => {
                  dispatch({
                    type: ISCONNECTING,
                    payload: true,
                    deviceId: item.deviceId,
                  });
                  CustomBleManger.getInstance().connectDevice(item.device);
                }}
                onDisconnectClick={() => {
                  CustomBleManger.getInstance().disconnectDevice(item.device);
                }}
                connected={item.connected}
                deviceName={item.device.name != null ? item.device.name : ''}
                isConnecting={item.isConnecting}></BleItem>
            );
          }}
        />
      </View>

      {connectedDevice != undefined ? (
        <View
          style={{
            // width: isPortrait()
            //   ? useResponsiveWidth(60)
            //   : useResponsiveWidth(40),
            width: useResponsiveWidth(100),
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Text
            style={{
              fontSize: isTabletAndPortrait()
                ? useResponsiveFontSize(2)
                : isTabletAndLandScape()
                ? useResponsiveFontSize(2)
                : useResponsiveFontSize(2.5),
              color: 'black',
              textAlign: 'center',
              marginBottom: isPortrait() ? useResponsiveWidth(5) : 0,
            }}>
            {t('ble_success')}
          </Text>
          <View style={{marginLeft : "auto",marginRight : "auto",marginTop : useResponsiveHeight(3)}}>
            <RoundedButton
              onClick={onClose}
              backgroundColor={CONSTANTS.COLORS.GREEN}
              label={t('start')}></RoundedButton>
          </View>
        </View>
      ) : (
        ''
      )}
    </View>
  ) : (
    <View style={{display: 'none'}}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: CONSTANTS.COLORS.YELLOW,
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
});
