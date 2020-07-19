import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParamsType } from '../../store/core/types'
import { Country } from '@virtuelabs-io/rapido-modules/src/models/country';
import { SetNewPassword } from '../../store/core/actions';


export type ResetCodeParamProps = StackScreenProps<AuthStackNavigationParamsType, 'resetCode'>

export type ResetCodeScreenState = { }

export type ResetCodeScreenDataProps = {
    data: {
        country: Country
        phoneNumber: string,
        passwordReset: ResetCodeScreenState
    }
}

export type ResetCodeScreenDispatchProps = {
    setPhoneNumber: (phoneNumber: string) => void
    setCountry: (countryCode: string) => void
    setOTP: (otp: string) => void
    setNewPassword: (newPassword: string) => void
}

export type ResetCodeScreenProps = ResetCodeParamProps &
    ResetCodeScreenDispatchProps &
    ResetCodeScreenDataProps