import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types';

export type ProductAddScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'medicineAdd'>



export type ProductAddScreenState = {
   // actionType: 'Camera' | 'CameraRole'
}

export type ProductAddScreenDataProps = {
    
 }

export type ProductAddScreenDispatchProps = {
    
}

export type ProductAddScreenProps =
ProductAddScreenParamProps &
ProductAddScreenDispatchProps &
ProductAddScreenDataProps