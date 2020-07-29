import { CoreReduxStateType } from './types'
import { SET_PHONE_NUMBER, SET_COUNTRY, CoreActionTypes, USER_SIGNED_IN, USER_SIGNED_OUT, SET_PASSWORD, SET_NEW_PASSWORD, SET_OTP, GEO_LOCATION, LOCATION } from './actions';
import Constants from '../../commons/constants';
import { Country } from '../../models/country';
import { CoreReduxInitialState } from './data'

const countries: Country[] = Constants.COUNTRY_CODES

const signInUser = (state: CoreReduxStateType): CoreReduxStateType => {
    const coreData = state.coreData
    const auth = state.coreData.auth
    return {
        ...state,
        coreData: {
            ...coreData,
            auth: {
                ...auth,
                signedIn: true
            }
        }
    }
}

const signOutUser = (state: CoreReduxStateType): CoreReduxStateType => {
    const coreData = state.coreData
    const auth = state.coreData.auth
    //console.log("signOutUser triggered")
    return {
        ...state,
        coreData: {
            ...coreData,
            auth: {
                ...auth,
                signedIn: false
            }
        }
    }
}

const updateCountry = (state: CoreReduxStateType, countryCode: string): CoreReduxStateType => {
    const countryIndex = countries.findIndex(country => country.code === countryCode)
    if (!countryIndex) {
        throw "Error retrieving country"
    }
    const coreData = state.coreData
    return {
        ...state,
        coreData: {
            ...coreData,
            country: countries[countryIndex]
        }
    }
}

const updatePhoneNumber = (state: CoreReduxStateType, phoneNumber: string): CoreReduxStateType => {
    const coreData = state.coreData
    return {
        ...state,
        coreData: {
            ...coreData,
            phoneNumber: phoneNumber
        }
    }
}

const updatePassword = (state: CoreReduxStateType, password: string): CoreReduxStateType => {
    const coreData = state.coreData
    return {
        ...state,
        coreData: {
            ...coreData,
            password: password
        }
    }
}

const updateNewPassword = (state: CoreReduxStateType, newPassword: string): CoreReduxStateType => {
    return {
        ...state,
        coreData: {
            ...state.coreData,
            resetPassword: {
                ...state.coreData.resetPassword,
                newPassword: newPassword
            }
        }
    }
}

const updateOTP = (state: CoreReduxStateType, otp: string): CoreReduxStateType => {
    return {
        ...state,
        coreData: {
            ...state.coreData,
            resetPassword: {
                ...state.coreData.resetPassword,
                otp: otp
            }
        }
    }
}

const updateGeoLocation = (state: CoreReduxStateType, latitude: number, longitude: number): CoreReduxStateType => {
    return {
        ...state,
        coreData: {
            ...state.coreData,
            latitude,
            longitude
        }
    }
}

const updateLocation = (state: CoreReduxStateType, location: string): CoreReduxStateType => {
    return {
        ...state,
        coreData: {
            ...state.coreData,
            location
        }
    }
}

export const coreReducer = (state = CoreReduxInitialState, action: CoreActionTypes): CoreReduxStateType => {
    switch (action.type) {
        case USER_SIGNED_IN:
            return signInUser(state)
        case USER_SIGNED_OUT:
            return signOutUser(state)
        case SET_COUNTRY:
            return updateCountry(state, action.countryCode)
        case SET_PHONE_NUMBER:
            return updatePhoneNumber(state, action.phoneNumber)
        case SET_PASSWORD:
            return updatePassword(state, action.password)
        case SET_NEW_PASSWORD:
            return updateNewPassword(state, action.newPassword)
        case SET_OTP:
            return updateOTP(state, action.otp)
        case GEO_LOCATION:
            return updateGeoLocation(state, action.latitude, action.longitude)
        case LOCATION:
            return updateLocation(state, action.location)
        default:
            return state
    }
}