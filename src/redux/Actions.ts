import { Characteristic, Device } from "react-native-ble-plx";
import { CustomBleDevice } from "./reducers/BleReducer";

// actionTypes.ts
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const PUSHDEVICE = 'PUSHDEVICE';
export const STARTSCANNING ='STARTSCANNING'
export const STOPSCANNING ='STOPSCANNING'
export const SAVECHAR ='SAVECHAR'
export const ISCONNECTING ='ISCONNECTING'
export const RESET ='RESET'

// Define action interfaces for type safety
export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export interface Reset {
  type: typeof RESET;
}


export interface PushDevice {
  type : typeof PUSHDEVICE;
  payload : CustomBleDevice
}


export interface StartScanning {
  type : typeof STARTSCANNING;
  payload : boolean
}

export interface IsConnecting {
  type : typeof ISCONNECTING;
  payload : boolean,
  deviceId : string,
}

export interface StopScanning {
  type : typeof STOPSCANNING;
  payload : boolean
}

export interface SaveChar {
  type : typeof SAVECHAR;
  payload : Characteristic;
  device : CustomBleDevice
}




export type CounterAction = IncrementAction | DecrementAction;
export type BleAction = PushDevice | StartScanning | StopScanning | SaveChar | IsConnecting | Reset;
