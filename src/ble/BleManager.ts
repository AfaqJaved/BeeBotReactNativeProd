import { BleManager, Device, Service, Characteristic } from 'react-native-ble-plx';
import { CONSTANTS } from '../constants/Contants';
import store, { RootReducer } from '../redux/Store';
import { ISCONNECTING, PUSHDEVICE, RESET, SAVECHAR, STARTSCANNING, STOPSCANNING } from '../redux/Actions';
import { CustomBleDevice } from '../redux/reducers/BleReducer';


export class CustomBleManger {
    private static instance: CustomBleManger;
    private bleManager: BleManager = new BleManager();

    private constructor() {

    }

    public static getInstance(): CustomBleManger {
        if (!CustomBleManger.instance) {
            CustomBleManger.instance = new CustomBleManger();
        }
        return CustomBleManger.instance;
    }




    getManager(): BleManager {
        return this.bleManager;
    }


    async connectDevice(device: Device) {
        device.connect()
            .then((device) => {
                return device.discoverAllServicesAndCharacteristics()
            })
            .then((device) => {
                return device.characteristicsForService(CONSTANTS.BLE.SERVICE)
            })
            .then((char: Characteristic[]) => {
                let charHold = char.find((current) => current.uuid === CONSTANTS.BLE.CHAR);
                store.dispatch({
                    type: SAVECHAR, payload: charHold, device: {
                        device: device,
                        deviceId: device.id,
                        deviceName: device.name,
                        isConnecting: false,
                        connected: true
                    } as CustomBleDevice
                })
            })
            .catch((error) => {
                store.dispatch({
                    type: ISCONNECTING,
                    payload: false,
                    deviceId: device.id,
                });
            });
    }

    disconnectDevice = (device: Device) => {
        store.dispatch({ type: RESET })
        device.cancelConnection();
    }


    async writeBle(message: string) {
        // if (this.charcter != null) {
        //     this.charcter.writeWithoutResponse(btoa(message));
        // }
    }


    startScanning() {
        store.dispatch({ type: STARTSCANNING, payload: true });
        this.bleManager.startDeviceScan(null, { allowDuplicates: false }, async (error, device) => {
            if (error) {
                console.log(error.message);
                console.log(error);
                console.log(error.reason);
                return
            }
            if (device != null) {
                if (device.name === CONSTANTS.BLE.NAME) {
                    let found = false;
                    store.getState().bleReducer.foundDevices.forEach((current) => {
                        if (device.id === current.device.id) {
                            found = true;
                        }
                    })
                    if (!found) {
                        console.log(device.name);
                        console.log(device.id);
                        store.dispatch({
                            type: PUSHDEVICE,
                            payload: {
                                connected: false, isConnecting: false,
                                device: device, deviceId: device.id, deviceName: device.name
                            } as CustomBleDevice
                        })
                    }
                }
            }
        });

        setTimeout(() => {
            CustomBleManger.getInstance().getManager().stopDeviceScan();
            store.dispatch({ type: STOPSCANNING, payload: false });
        }, CONSTANTS.BLE.SCAN_TIME);
    }
}
