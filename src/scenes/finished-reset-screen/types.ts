import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigationParamsType } from '../../store/core/types'
import { Country } from '@virtuelabs-io/rapido-modules/src/models/country';


export type FinishedResetParamProps = StackScreenProps<AuthStackNavigationParamsType, 'finishedReset'>
export type FinishedResetScreenDataProps = { }
export type FinishedResetScreenState = { }
export type FinishedResetScreenDispatchProps = { }
export type FinishedResetScreenProps = FinishedResetParamProps &
    FinishedResetScreenDispatchProps &
    FinishedResetScreenDataProps