import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParamsType } from '../../store/core/types'
import { Country } from '@virtuelabs-io/rapido-modules/src/models/country';

// type font = {
//     id: string
//     name: string
// }

// export type LoginDetailsHolder = {
//     dialCode: string
//     countryCode: string
//     phoneNumber: string
//     password: string
// }

export type RegisterScreenParamProps = StackScreenProps<AuthStackNavigationParamsType, 'register'>

export type RegisterScreenDataProps = {
    data: {
        country: Country
        phoneNumber: string
        password: string
    }
}

export type RegisterScreenState = { }

export type RegisterDetailsDispatchProps = {
    signInUser: () => void
    setPhoneNumber: (phoneNumber: string) => void
    setPassword: (password: string) => void
    setCountry: (countryCode: string) => void
}

export type RegisterScreenProps =
    RegisterScreenParamProps &
    RegisterDetailsDispatchProps &
    RegisterScreenDataProps