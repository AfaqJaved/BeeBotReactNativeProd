import { isPortrait, useResponsiveHeight } from "./Utils"



export const pageMarginTop = () => {
    return isPortrait() ? useResponsiveHeight(3) : useResponsiveHeight(6);
}