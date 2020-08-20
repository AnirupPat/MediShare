import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { MedConfirm } from '../../store/medicines/types';
import { Medicine } from '../../models/medicines';


export type MedConfirmationScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'medConfirmation'>

export type MedConfirmationScreenState = {
}

export type MedConfirmationScreenDispatchProps = {
    setMedConfirm: (medConfirm: MedConfirm) => void
    setMedicine: (medDetails: Medicine) => void
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