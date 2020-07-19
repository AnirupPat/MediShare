import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackNavigationParamsType } from '../../store/core/types'


export type ProfileScreenParamProps = StackScreenProps<SettingsStackNavigationParamsType, 'profile'>

export type ProfileScreenState = { }

export type ProfileScreenDispatchProps = {

}

export type ProfileScreenProps = ProfileScreenParamProps & ProfileScreenDispatchProps
