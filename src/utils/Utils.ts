

import { useState } from 'react';
import { Dimensions } from 'react-native';


export const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

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