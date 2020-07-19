import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { Medicine } from '../../models/medicines';


export type MedicineScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'medicine'>

export type MedicineScreenDataProps = {
    data: Medicine[],
    title: string
}

export type MedicineScreenState = { }

export type MedicineScreenDispatchProps = {
    
 }

export type MedicineScreenProps =
    MedicineScreenParamProps &
    MedicineScreenDispatchProps &
    MedicineScreenDataProps