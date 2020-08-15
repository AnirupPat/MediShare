import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'


export type MedConfirmationScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'medConfirmation'>

export type MedConfirmationScreenState = { }

export type MedConfirmationScreenDispatchProps = {

}

export type MedConfirmationScreenDataProps = {
    data: {
        title: string
    }
}

export type MedConfirmationScreenProps = 
MedConfirmationScreenParamProps & 
MedConfirmationScreenDispatchProps &
MedConfirmationScreenDataProps