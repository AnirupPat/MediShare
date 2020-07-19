import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackNavigationParamsType } from '../../store/core/types'


export type AboutUsScreenParamProps = StackScreenProps<SettingsStackNavigationParamsType, 'profile'>

export type AboutUsScreenState = { }

export type AboutUsScreenDispatchProps = {

}

export type AboutUsScreenProps = AboutUsScreenParamProps & AboutUsScreenDispatchProps
