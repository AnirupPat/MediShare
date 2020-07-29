import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParamsType } from '../../store/core/types'
import { Country } from '@virtuelabs-io/rapido-modules/src/models/country';

const EXAMPLES = [
    '1 Hacker Way',
    { latitude: 49.28, longitude: -123.12 },
    'Palo Alto Caltrain Station (this one will error)',
    'Rogers Arena, Vancouver',
    { latitude: 0, longitude: 0 },
];

export type RegisterScreenParamProps = StackScreenProps<AuthStackNavigationParamsType, 'register'>

export type RegisterScreenDataProps = {
    data: {
        country: Country
        phoneNumber: string
        password: string,
        location: string,
        latitude: number,
        longitude: number
    }
}

export type RegisterScreenState = {
    selectedExample: {
        latitude: number,
        longitude: number
    },
    result: '',
    inProgress: boolean,
 }

export type RegisterDetailsDispatchProps = {
    signInUser: () => void
    setPhoneNumber: (phoneNumber: string) => void
    setPassword: (password: string) => void
    setCountry: (countryCode: string) => void
    setGeoLocation: (latitude: number, longitude: number) => void
    setLocation: (location: string) => void
}

export type RegisterScreenProps =
    RegisterScreenParamProps &
    RegisterDetailsDispatchProps &
    RegisterScreenDataProps