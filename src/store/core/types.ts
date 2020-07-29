import { Country } from '../../models/country';

export type Authentication = {
    signedIn: boolean
    authnToken: string
    authzToken: string
}

export type AuthStackNavigationParamsType = {
    login: {
        title: string
    },
    register: {
        title: string
    },
    resetCode: {
        title: string
    },
    resetPassword: {
        title: string
    },
    finishedReset: {
        title: string
    }
}

export type MedicineStackNavigationParamsType = {
    medicine: {
        title: string
    },
    notifications: {
        title: string
    }
}

export type RequestStackNavigationParamsType = {
    request: {
        title: string
    }
}





export type SettingsStackNavigationParamsType = {
    settings: {
        title: string
    }
    profile: {
        title: string
    }
    configuration: {
        title: string
    }
    privacyPolicy: {
        title: string
    }
    termsOfService: {
        title: string
    }
    aboutUs: {
        title: string
    }
}

export type RootStackParamsType = {
    authStack: AuthStackNavigationParamsType,
    settingsStack: SettingsStackNavigationParamsType,
    medicineStack: MedicineStackNavigationParamsType,
    requestStack: RequestStackNavigationParamsType
}

export type CoreReduxStateType = {
    rootStackParams: RootStackParamsType
    coreData: {
        country: Country
        phoneNumber: string
        password: string
        auth: Authentication
        username: string
        resetPassword: {
            otp: string
            newPassword: string
        }
    }
}