import { Country } from '../../models/country';

const allCountryCodes: Country[] = require('../../assets/data/country-codes.json')

const Constants = {
    APP_NAME: "Rapidobuild",
    DEFAULT_COUNTRY_CODE: "GB",
    COUNTRY_CODES: allCountryCodes,
    DEFAULT_ICON: "feather",
    SPACE: " ",
    DEFAULT_TEXT: {
        insightsText1: "Looks like you are all caught with your business insights",
        insightsText2: "We will keep you informed about any business insights we find based on your data"
    },
    FONTS: {
        'laila-bold': require('../../assets/fonts/Laila-Bold.ttf'),
        'laila-light': require('../../assets/fonts/Laila-Light.ttf'),
        'laila-medium': require('../../assets/fonts/Laila-Medium.ttf'),
        'laila': require('../../assets/fonts/Laila-Regular.ttf'),
        'laila-semibold': require('../../assets/fonts/Laila-SemiBold.ttf'),
        'quantico-bold': require('../../assets/fonts/Quantico-Bold.ttf'),
        'quantico-bold-italic': require('../../assets/fonts/Quantico-BoldItalic.ttf'),
        'quantico-italic': require('../../assets/fonts/Quantico-Italic.ttf'),
        'quantico': require('../../assets/fonts/Quantico-Regular.ttf'),
        'arima-madurai': require('../../assets/fonts/ArimaMadurai-Regular.ttf'),
        'arima-madurai-black': require('../../assets/fonts/ArimaMadurai-Black.ttf'),
        'arima-madurai-bold': require('../../assets/fonts/ArimaMadurai-Bold.ttf'),
        'arima-madurai-ebold': require('../../assets/fonts/ArimaMadurai-ExtraBold.ttf'),
        'arima-madurai-elight': require('../../assets/fonts/ArimaMadurai-ExtraLight.ttf'),
        'arima-madurai-light': require('../../assets/fonts/ArimaMadurai-Light.ttf'),
        'arima-madurai-medium': require('../../assets/fonts/ArimaMadurai-Medium.ttf'),
        'arima-madurai-thin': require('../../assets/fonts/ArimaMadurai-Thin.ttf')
    },
    NAV: {
        stackNames: {
            dashboardStack: {
                name: "dashboardStack",
                icon: "bar-chart-2",
                package: "Feather",
                displayText: "Dashboard"
            },
            ordersStack: {
                name: "ordersStack",
                icon: "package",
                package: "Feather",
                displayText: "Orders"
            },
            settingsStack: {
                name: "settingsStack",
                icon: "settings",
                package: "feather",
                displayText: "Settings"
            }
        },
        screenNames: {
            login: "login",
            resetCode: "resetCode",
            resetPassword: "resetPassword",
            finishedReset: "finishedReset",
            dashboard: "dashboard",
            orders: "orders",
            orderDetails: "orderDetails",
            settings: "settings",
            profile: "profile"
        }
    }
}

export default Constants
