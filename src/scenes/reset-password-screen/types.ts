import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParamsType } from '../../store/core/types'
import { Country } from '@virtuelabs-io/rapido-modules/src/models/country';


export type ResetPasswordParamProps = StackScreenProps<AuthStackNavigationParamsType, 'resetPassword'>

export type ResetPasswordScreenDataProps = {
    data: {
        country: Country,
        phoneNumber: string
        resetPasswordInfo: {
            otp: string,
            newPassword: string
        }
    }
}
export type ResetPasswordScreenState = {

}
export type ResetPasswordScreenDispatchProps = {
    setOTP: (otp: string) => void
    setNewPassword: (newPassword: string) => void
}

export type ResetPasswordScreenProps = ResetPasswordParamProps &
    ResetPasswordScreenDispatchProps &
    ResetPasswordScreenDataProps