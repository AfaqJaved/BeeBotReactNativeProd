// import { PermissionsAndroid } from "react-native";




// // BLUETOOTH_CONNECT: 'android.permission.BLUETOOTH_CONNECT'

// export const requestBluetoothConnectPermission = async () => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
//             {
//                 title: 'Bluetooth Connect Permission Required',
//                 message: "This is required to Connect Ble Devices",
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log('You can use the ble connect');
//         } else {
//             console.log('ble Connect permission denied');
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// };

// // BLUETOOTH_SCAN: 'android.permission.BLUETOOTH_SCAN'
// export const requestBluetoothScanPermission = async () => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
//             {
//                 title: 'Bluetooth Scan Permission Required',
//                 message: "This is required to Scan Ble Devices",
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log('You can use the Scan Ble Devices');
//         } else {
//             console.log('ble Connect permission denied');
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// };

// // BLUETOOTH_ADVERTISE: 'android.permission.BLUETOOTH_ADVERTISE'
// export const requestBluetoothAdvertisePermission = async () => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
//             {
//                 title: 'Bluetooth Advertise Permission Required',
//                 message: "This is required to Scan Ble Devices",
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log('You can use the Scan Ble Devices');
//         } else {
//             console.log('ble Connect permission denied');
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// };

// // ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION'

// export const requestFineLocationPermission = async () => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//             {
//                 title: 'Location Permission',
//                 message: "This is required to Scan Ble Devices",
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log('You can use the Location');
//         } else {
//             console.log('ble Connect permission denied');
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// };

// // ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION'

// export const requestCoarseLocationPermission = async () => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
//             {
//                 title: 'Coarse Location Permission',
//                 message: "This is required to Scan Ble Devices",
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log('You can use the coarse Location');
//         } else {
//             console.log('ble Connect permission denied');
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// };


// // ACCESS_BACKGROUND_LOCATION: 'android.permission.ACCESS_BACKGROUND_LOCATION'
// export const requestBackGroundLocation = async () => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
//             {
//                 title: 'Coarse BackGround Location Permission',
//                 message: "This is required to Scan Ble Devices",
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log('You can use the background Location');
//         } else {
//             console.log('ble Connect permission denied');
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// };