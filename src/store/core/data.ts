import { CoreReduxStateType } from './types';
import Constants from '../../commons/constants'

export const CoreReduxInitialState: CoreReduxStateType = {
    rootStackParams: {
        authStack: {
            login: {
                title: "Login"
            },
            register: {
                title: "Register"
            },
            resetCode: {
                title: "Reset Code"
            },
            resetPassword: {
                title: "Reset Password"
            },
            finishedReset: {
                title: "Reset Successful"
            }
        },
        
        settingsStack: {
            settings: {
                title: "Settings"
            },
            profile: {
                title: "Profile"
            },
            configuration: {
                title: "Configuration"
            },
            privacyPolicy: {
                title: "Privacy Policy"
            },
            termsOfService: {
                title: "Terms Of Service"
            },
            aboutUs: {
                title: "About Us"
            }
        },

        medicineStack: {
            medicine: {
                title: "Medicines"
            },
            notifications: {
                title: 'Notifications'
            }
        },

        requestStack: {
            request: {
                title: 'Request'
            }
        }
    },
    coreData: {
        country: Constants.COUNTRY_CODES.find(country => country.code === Constants.DEFAULT_COUNTRY_CODE)!,
        phoneNumber: "",
        password: "",
        auth: {
            signedIn: false,
            authnToken: "",
            authzToken: ""
        },
        username: "Administrator",
        resetPassword: {
            otp: "",
            newPassword: ""
        }
    }
}