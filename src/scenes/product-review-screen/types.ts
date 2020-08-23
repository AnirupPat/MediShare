import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { Medicine } from '../../models/medicines';


export type MedicineReviewScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'medicineReview'>

export type MedicineReviewScreenDataProps = {
    data: Medicine[],
    title: string,
    entity: string
}

export type MedicineReviewScreenState = {
    token: string,
    notification: null,
    title: 'Hello World',
    body: 'Say something!'
}

export type MedicineReviewScreenDispatchProps = {
    // clearMedPics: () => void,
    setCheckBox: (id: string, value: boolean) => void
}

export type MedicineReviewScreenProps =
    MedicineReviewScreenParamProps &
    MedicineReviewScreenDispatchProps &
    MedicineReviewScreenDataProps