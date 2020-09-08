import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { Medicine } from '../../models/medicines';


export type NGORequestScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'ngoRequest'>

export type NGORequestScreenDataProps = {
    data: {
        medName: string,
        id: string
    }[]
}

export type NGORequestScreenState = { }

export type NGORequestScreenDispatchProps = {

}

export type NGORequestScreenProps = NGORequestScreenDataProps & NGORequestScreenParamProps & NGORequestScreenDispatchProps