import { Platform } from 'react-native';
import { Colors } from '../styles/colors';

const getTabTitleFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-ebold' : 'arima-madurai-ebold'
}

const getHeadingFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-ebold' : 'arima-madurai-ebold'
}

const getTitleFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-bold' : 'arima-madurai-bold'
}

const getThinFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-thin' : 'arima-madurai-thin'
}

const getFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai' : 'arima-madurai'
}

const getMediumFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-medium' : 'arima-madurai-medium'
}

const getLightFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-light' : 'arima-madurai-light'
}

const getELightFontFamily = (): string => {
    return Platform.OS === "android" ? 'arima-madurai-elight' : 'arima-madurai-elight'
}







const Utils = {
    getFontFamily: getFontFamily,
    getTabTitleFontFamily: getTabTitleFontFamily,
    getHeadingFontFamily: getHeadingFontFamily,
    getTitleFontFamily: getTitleFontFamily,
    getThinFontFamily: getThinFontFamily,
    getMediumFontFamily: getMediumFontFamily,
    getLightFontFamily: getLightFontFamily,
    getELightFontFamily: getELightFontFamily
}

export default Utils
