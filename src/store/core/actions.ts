export const USER_SIGNED_IN = 'USER_SIGNED_IN'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'
export const SET_COUNTRY = 'SET_COUNTRY'
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_NEW_PASSWORD = 'SET_NEWPASSWORD'
export const SET_OTP = 'SET_OTP'
export const GEO_LOCATION = "GEO_LOCATION"
export const LOCATION = "LOCATION"
export const SET_ENTITY = "SET_ENTITY"

export interface UserSignInAction {
    type: typeof USER_SIGNED_IN
}

export interface UserSignOUTAction {
    type: typeof USER_SIGNED_OUT
}


export interface SetCountryAction {
    type: typeof SET_COUNTRY
    countryCode: string
}

export interface SetPhoneNumberAction {
    type: typeof SET_PHONE_NUMBER
    phoneNumber: string
}

export interface SetPassword {
    type: typeof SET_PASSWORD
    password: string
}

export interface SetNewPassword {
    type: typeof SET_NEW_PASSWORD
    newPassword: string
}

export interface SetOTP {
    type: typeof SET_OTP
    otp: string
}

export interface GeoLocationAction {
    type: typeof GEO_LOCATION
    latitude: number
    longitude: number
}

export interface LocationAction {
    type: typeof LOCATION
    location: string
}

export interface setEntity {
    type: typeof SET_ENTITY
    entity: string
}

export type CoreActionTypes =
    SetCountryAction
    | SetPhoneNumberAction
    | UserSignInAction
    | UserSignOUTAction
    | SetPassword
    | SetNewPassword
    | SetOTP
    | GeoLocationAction
    | LocationAction
    | setEntity

export const GeoLocation = (latitude: number, longitude: number): CoreActionTypes => {
    return {
        type: GEO_LOCATION,
        latitude,
        longitude
    }
}

export const LocationVal = (location: string): CoreActionTypes => {
    return {
        type: LOCATION,
        location
    }
}

export const signInUser = (): CoreActionTypes => {
    return {
        type: USER_SIGNED_IN
    }
}

export const signOutUser = (): CoreActionTypes => {
    return {
        type: USER_SIGNED_OUT
    }
}

export const setCountry = (countryCode: string): CoreActionTypes => {
    return {
        type: SET_COUNTRY,
        countryCode: countryCode
    }
}

export const setPhoneNumber = (phoneNumber: string): CoreActionTypes => {
    return {
        type: SET_PHONE_NUMBER,
        phoneNumber: phoneNumber
    }
}

export const setPassword = (password: string): CoreActionTypes => {
    return {
        type: SET_PASSWORD,
        password: password
    }
}

export const setOTP = (otp: string): CoreActionTypes => {
    return {
        type: SET_OTP,
        otp: otp
    }
}

export const setNewPassword = (newPassword: string): CoreActionTypes => {
    return {
        type: SET_NEW_PASSWORD,
        newPassword: newPassword
    }
}

export const setEntity = (entity: string): CoreActionTypes => {
    return {
        type: SET_ENTITY,
        entity
    }
}