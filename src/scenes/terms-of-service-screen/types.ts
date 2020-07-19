import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackNavigationParamsType } from '../../store/core/types'


export type TermsOfServiceScreenParamProps = StackScreenProps<SettingsStackNavigationParamsType, 'profile'>

export type TermsOfServiceScreenState = { }

export type TermsOfServiceScreenDispatchProps = {

}

export type TermsOfServiceScreenProps = TermsOfServiceScreenParamProps & TermsOfServiceScreenDispatchProps
