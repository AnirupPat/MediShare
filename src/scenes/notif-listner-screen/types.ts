import { StackScreenProps } from '@react-navigation/stack';
import { RequestStackNavigationParamsType, MedicineStackNavigationParamsType } from '../../store/core/types'
import { Dimensions } from 'react-native';

const { height } = Dimensions.get("window");
export type NotifListnerScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'notifListner'>

export type NotifListnerScreenDataProps = {
    entity: string
}

export type NotifListnerScreenState = { 
    
}

export type NotifListnerScreenDispatchProps = {
    
 }

export type NotifListnerScreenProps =
    NotifListnerScreenParamProps &
    NotifListnerScreenDispatchProps &
    NotifListnerScreenDataProps