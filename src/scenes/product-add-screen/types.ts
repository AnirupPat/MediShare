import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types';
import { MedicinePics } from '../../store/medicines/types';

export type ProductAddScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'medicineAdd'>



export type ProductAddScreenState = {
   // actionType: 'Camera' | 'CameraRole'
}

export type ProductAddScreenDataProps = {
    image: string[]
 }

export type ProductAddScreenDispatchProps = {
    addMedicinePics: (image: any) => void
}

export type ProductAddScreenProps =
ProductAddScreenParamProps &
ProductAddScreenDispatchProps &
ProductAddScreenDataProps