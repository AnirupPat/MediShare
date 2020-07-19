import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackNavigationParamsType } from '../../store/core/types'


export type PrivacyPolicyScreenParamProps = StackScreenProps<SettingsStackNavigationParamsType, 'profile'>

export type PrivacyPolicyScreenState = { }

export type PrivacyPolicyScreenDispatchProps = {

}

export type PrivacyPolicyScreenProps = PrivacyPolicyScreenParamProps & PrivacyPolicyScreenDispatchProps
