import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';


enum Orientation {
    PORTRAIT,
    LANDSCAPE
}

const isTablet = () => {
    return DeviceInfo.isTablet();
};

const isMobile = () => {
    return !isTablet();
};


const getOrientation = (): Orientation => {
    const { width, height } = Dimensions.get('window');
    return width > height ? Orientation.LANDSCAPE : Orientation.PORTRAIT;
}


export const getResponsiveValues = (vMobilePortrait: number, vMobLandScape: number, vTabletPortrait: number, vTabletLandscape: number) : number => {

    console.log("called",isMobile(),isTablet());
    //mobile portait
    if (isMobile() && getOrientation() == Orientation.PORTRAIT) {
        return vMobilePortrait;
    }
    //mobile landscape
    if (isMobile() && getOrientation() == Orientation.LANDSCAPE) {
        return vMobLandScape;
    }
    //tablet portrait
    if (isTablet() && getOrientation() == Orientation.PORTRAIT) {
        return vTabletPortrait;
    }
    //tablet landscape
    if (isTablet() && getOrientation() == Orientation.LANDSCAPE) {
        return vTabletLandscape;
    }

    return 0;
}