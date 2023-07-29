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
  isPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import i18n from '../../translation';
import React from 'react';
import {useTranslation} from 'react-i18next';

import Cross from '../assets/img/cancel.png';
import Refresh from '../assets/img/update.png';
import RadioOff from '../assets/img/radio_off.png';
import {BleItem} from '../components/BleItem';
import {CustomBleManger} from '../ble/BleManager';
import Toast from 'react-native-toast-message';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducer} from '../redux/Store';
import {ISCONNECTING, PUSHDEVICE} from '../redux/Actions';
import {Characteristic} from 'react-native-ble-plx';
import {err} from 'react-native-svg/lib/typescript/xml';
// import {
//   requestBackGroundLocation,
//   requestBluetoothAdvertisePermission,
//   requestBluetoothConnectPermission,
//   requestBluetoothScanPermission,
//   requestCoarseLocationPermission,
//   requestFineLocationPermission,
// } from '../utils/Permission';

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
          {!isScanning ? <Image resizeMode="cover" source={Refresh} /> : ''}
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <Image resizeMode="cover" source={Cross} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: useResponsiveFontSize(3),
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
