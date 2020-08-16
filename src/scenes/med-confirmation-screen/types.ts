import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { MedConfirm } from '../../store/medicines/types';


export type MedConfirmationScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'medConfirmation'>

export type MedConfirmationScreenState = {
}

export type MedConfirmationScreenDispatchProps = {
    setMedConfirm: (medConfirm: MedConfirm) => void
}

export type MedConfirmationScreenDataProps = {
    data: {
        title: string,
        medConfirm: MedConfirm
    }
}

export type MedConfirmationScreenProps = 
MedConfirmationScreenParamProps & 
MedConfirmationScreenDispatchProps &
MedConfirmationScreenDataProps