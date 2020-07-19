const colorCodes = {
    white: '#fff',
    black: '#000',
    green: '#03a87c',
    blue: '#0747A6',
    orange: '#ffa32b',
    yellow: '#f2c811',
    red: '#e5001e',
    grayDark: '#292b2c',
    grey: '#3f3f3f',
    grayLight: '#7e7e7e',
    grayLighter: '#ededed',
    grayLightest: '#fafafa',
    grayTextLight: '#6d6d6d',
    greyShadeInActive: '#D3D3D3',
    silver: '#C0C0C0',
    paleYellow: "#fff5cf",
    vizColor: "#82E8CB",
    statusPill: "#fff5cf",
    dueDatePill: "#ededed",
    iosBlue: "#007AFF",
    dateTimePill: "#ededed",
}

// const colorScheme = ["#188977", "#1D9A6C", "#39A96B", "#56B870", "#74C67A", "#99D492", "#BFE1B0", "#DEEDCF"];
// const colorScheme = ["#DFC600", "#FDA900", "#FF8C22", "#FF7844", "#FF7166", "#FF888A", "#FFAABD", "#FFCCE2"];
const colorScheme = ["#61BDC8", "#71E3D7", "#82E8CB", "#94EDC3", "#A6F2C0", "#B9F6C2", "#CEF9CD", "#E6FCE0"];

export const Colors = {
    codes: colorCodes,
    primary: colorCodes.black,
    palePrimary: colorCodes.grayTextLight,
    secondary: colorCodes.white,
    success: colorCodes.green,
    info: colorCodes.blue,
    warning: colorCodes.yellow,
    danger: colorCodes.red,
    inActive: colorCodes.silver,
    colorScheme: colorScheme,
    alternatePrimary: colorCodes.black
}
