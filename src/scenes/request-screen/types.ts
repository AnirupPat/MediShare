  
import { StackScreenProps } from '@react-navigation/stack';
import { RequestStackNavigationParamsType } from '../../store/core/types'
// import { Request } from '../../models/Requests';


export type RequestScreenParamProps = StackScreenProps<RequestStackNavigationParamsType, 'request'>

export type RequestScreenDataProps = {
    // data: Request[],
    // title: string
}

export type RequestScreenState = { }

export type RequestScreenDispatchProps = {
    
 }

export type RequestScreenProps =
    RequestScreenParamProps &
    RequestScreenDispatchProps &
    RequestScreenDataProps