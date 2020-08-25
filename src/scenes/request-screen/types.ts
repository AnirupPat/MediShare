  
import { StackScreenProps } from '@react-navigation/stack';
import { RequestStackNavigationParamsType, MedicineStackNavigationParamsType } from '../../store/core/types'
import SlidingUpPanel from 'rn-sliding-up-panel';
import { Dimensions } from 'react-native';
import { Donors } from '../../models/donors';
// import { Request } from '../../models/Requests';

const { height } = Dimensions.get("window");
export type RequestScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'request'>
// export type MedicineScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'request'>

export type RequestScreenDataProps = {
    data: Donors[]
}

export type RequestScreenState = { 
    draggableRange: { top: number, bottom: number }
}

export type RequestScreenDispatchProps = {
    setDecision: (label: string) => void
 }

export type RequestScreenProps =
    RequestScreenParamProps &
    RequestScreenDispatchProps &
    RequestScreenDataProps