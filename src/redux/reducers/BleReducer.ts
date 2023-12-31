import { Characteristic, Device } from "react-native-ble-plx";
import { BleAction, ISCONNECTING, ORIENTATION, PUSHDEVICE, RESET, SAVECHAR, STARTSCANNING, STOPSCANNING } from "../Actions";
import { isPortrait } from "../../utils/Utils";
import { act } from "react-test-renderer";


export interface CustomBleDevice {
    connected: boolean;
    isConnecting: boolean;
    deviceId: string;
    deviceName: string;
    device: Device;
}


// Define the counter state interface
export interface BleState {
    foundDevices: CustomBleDevice[];
    connectedDevice?: CustomBleDevice;
    isScanning: boolean;
    char?: Characteristic;
    battery? : number;
    isPortrait ?: boolean;
}

const initialState: BleState = {
    foundDevices: [],
    isScanning: false,
    connectedDevice: undefined,
    char: undefined,
    battery : 0,
    isPortrait : isPortrait()
};



const bleStateReducer = (state = initialState, action: BleAction): BleState => {
    switch (action.type) {
        case PUSHDEVICE:
            return {
                foundDevices: [...state.foundDevices, action.payload],
                isScanning: true
            };
        case STARTSCANNING:
            return {
                ...state,
                isScanning: true
            };
        case STOPSCANNING:
            return {
                ...state,
                isScanning: false
            };
        case SAVECHAR: {
            return {
                ...state,
                char: action.payload,
                connectedDevice: action.device,
                foundDevices: [action.device]
            };
        }
        case ORIENTATION : {
            return {
                ...state,
                isPortrait : action.payload
            }
        }
        case ISCONNECTING: {
            return {
                ...state,
                foundDevices: state.foundDevices.map((hold) => {
                    if (hold.deviceId === action.deviceId) {
                        hold.isConnecting = action.payload
                    }
                    return hold;
                })
            }
        }
        case RESET: {
            return initialState;
        }
        default:
            return state;
    }
};

export default bleStateReducer;