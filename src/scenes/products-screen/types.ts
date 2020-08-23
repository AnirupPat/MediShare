import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { Medicine } from '../../models/medicines';


export type MedicineScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'medicine'>

export type MedicineScreenDataProps = {
    data: Medicine[],
    title: string,
    entity: string
}

export type MedicineScreenState = {
    token: string,
    notification: null,
    title: 'Hello World',
    body: 'Say something!',
}

export type MedicineScreenDispatchProps = {
    clearMedPics: () => void,
    setCheckBox: (id: string, value: boolean) => void
}

export type MedicineScreenProps =
    MedicineScreenParamProps &
    MedicineScreenDispatchProps &
    MedicineScreenDataProps