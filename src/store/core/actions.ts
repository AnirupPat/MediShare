export const USER_SIGNED_IN = 'USER_SIGNED_IN'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'
export const SET_COUNTRY = 'SET_COUNTRY'
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_NEW_PASSWORD = 'SET_NEWPASSWORD'
export const SET_OTP = 'SET_OTP'

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

export type CoreActionTypes =
    SetCountryAction
    | SetPhoneNumberAction
    | UserSignInAction
    | UserSignOUTAction
    | SetPassword
    | SetNewPassword
    | SetOTP

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