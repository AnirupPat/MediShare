import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParamsType } from '../../store/core/types'
import { Country } from '../../models/country';


export type FinishedRegisterationParamProps = StackScreenProps<AuthStackNavigationParamsType, 'finishedRegisteration'>
export type FinishedRegisterationScreenDataProps = { }
export type FinishedRegisterationScreenState = { }
export type FinishedRegisterationScreenDispatchProps = { }
export type FinishedRegisterationScreenProps = FinishedRegisterationParamProps &
    FinishedRegisterationScreenDispatchProps &
    FinishedRegisterationScreenDataProps