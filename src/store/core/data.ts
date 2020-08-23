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
            verifyCode: {
                title: 'Verify Code'
            },
            resetCode: {
                title: "Reset Code"
            },
            resetPassword: {
                title: "Reset Password"
            },
            finishedReset: {
                title: "Reset Successful"
            },
            finishedRegisteration: {
                title: "Success"
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
                title: "My Pillbox"
            },
            notifications: {
                title: 'Notifications'
            },
            medicineAdd: {
                title: 'Medicine Add'
            },
            medConfirmation: {
                title: 'Confirmation'
            },
            request: {
                title: 'Donors'
            },
            notifListner: {
                title: 'Review'
            },
            medicineReview: {
                title: 'PillBox Review'
            },
            mail: {
                title: ''
            }
        },

        requestStack: {
            request: {
                title: 'Request'
            },
            chatbot: {
                title: 'ChatBot'
            }
        }
    },
    coreData: {
        country: Constants.COUNTRY_CODES.find(country => country.code === Constants.DEFAULT_COUNTRY_CODE)!,
        phoneNumber: "",
        password: "",
        entity: "NGO",
        auth: {
            signedIn: false,
            authnToken: "",
            authzToken: ""
        },
        latitude: 0,
        longitude: 0,
        location: '',
        username: "Administrator",
        verifyCode: {
            otp: ""
        },
        resetPassword: {
            otp: "",
            newPassword: ""
        }
    }
}