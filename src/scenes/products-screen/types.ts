import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { Medicine } from '../../models/medicines';


export type MedicineScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'medicine'>

export type MedicineScreenDataProps = {
    data: Medicine[],
    title: string
}

export type MedicineScreenState = {
    token: string,
    notification: null,
    title: 'Hello World',
    body: 'Say something!',
}

export type MedicineScreenDispatchProps = {
    clearMedPics: () => void
}

export type MedicineScreenProps =
    MedicineScreenParamProps &
    MedicineScreenDispatchProps &
    MedicineScreenDataProps