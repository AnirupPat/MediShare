import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParamsType } from '../../store/core/types'
import { Country } from '@virtuelabs-io/rapido-modules/src/models/country';
import { SetNewPassword } from '../../store/core/actions';


export type VerifyCodeParamProps = StackScreenProps<AuthStackNavigationParamsType, 'verifyCode'>

export type VerifyCodeScreenState = { }

export type VerifyCodeScreenDataProps = {
    data: {
        country: Country
        phoneNumber: string,
        otp: string
    }
}

export type VerifyCodeScreenDispatchProps = {
    setPhoneNumber: (phoneNumber: string) => void
    setCountry: (countryCode: string) => void
    setOTP: (otp: string) => void
    setNewPassword: (newPassword: string) => void
}

export type VerifyCodeScreenProps = VerifyCodeParamProps &
    VerifyCodeScreenDispatchProps &
    VerifyCodeScreenDataProps