

import { useState } from 'react';
import { Dimensions } from 'react-native';
import { DEVICE } from '../constants/Contants';

export const deviceType = (): DEVICE => {
    const width = Dimensions.get('screen').width;
    if (isPortrait()) {
        if (width < 480) {
            return DEVICE.MOBILE
        }
        else if (width < 768) {
            return DEVICE.TABLET
        }
        else if (width < 1279) {
            return DEVICE.TABLET_LARGE
        }
        else {
            return DEVICE.TABLET_LARGE;
        }
    }
    else {
        if (width < 900) {
            return DEVICE.MOBILE;
        }
        else if (width < 1279) {
            return DEVICE.TABLET;
        }
        else {
            return DEVICE.TABLET_LARGE;
        }
    }

    return DEVICE.DESKTOP;


};


export const androidBottomNavigationHeight = () => {
    let deviceH = Dimensions.get('screen').height;
    let windowH = Dimensions.get('window').height;
    let bottomNavBarH = deviceH - windowH;
    return bottomNavBarH;
}


export const getResponsiveResource = (mobile: any, tablet: any, tabletlg: any) => {
    const device = deviceType();

    switch (device) {
        case DEVICE.MOBILE: {
            return mobile;
        }
        case DEVICE.TABLET: {
            return tablet;
        }
        case DEVICE.TABLET_LARGE: {
            return tabletlg;
        }
        default: {
            return null;
        }
    }
}



export const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

export const isTablet = () => {
    const width = Dimensions.get('screen').width;
    return width >= 768 ? true : false;
}

export const isTabletAndPortrait = () => {
    const width = Dimensions.get('screen').width;
    return (width >= 768 && isPortrait()) ? true : false;
}



export const isTabletAndLandScape = () => {
    const height = Dimensions.get('screen').height;
    return (height >= 768 && !isPortrait()) ? true : false;
}

export const useResponsiveHeight = (per: number) => {
    const dim = Dimensions.get('window').height;
    return (dim * per) / 100;
}

export const useResponsiveWidth = (per: number) => {
    const dim = Dimensions.get('window').width;
    return (dim * per) / 100;
}


export const getLocalFromList = (local: string) => {
    let hold = local.split('(')[1];
    let finalLanguage: string = hold[0] + hold[1];
    return finalLanguage.toLowerCase();
};


export const useResponsiveFontSize = (size: number) => {
    const { width, height } = Dimensions.get('window');
    return fontCalculation(height, width, size);
}

export const fontCalculation = (height: number, width: number, val: number) => {
    const widthDimension = height > width ? width : height;
    const aspectRatioBasedHeight = (16 / 9) * widthDimension;
    return percentageCalculation(
        Math.sqrt(
            Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
        ),
        val
    );
};

const percentageCalculation = (max: number, val: number) => max * (val / 100);

export const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
};