import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { Medicine } from '../../models/medicines';


export type MedicineScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'medicine'>

export type MedicineScreenDataProps = {
    data: Medicine[],
    title: string,
    entity: string,
    // searchText: ''
}

export type MedicineScreenState = {
    token: string,
    notification: null,
    title: string,
    body: string,
    searchText: string
}

export type MedicineScreenDispatchProps = {
    clearMedPics: () => void,
    setCheckBox: (id: string, value: boolean) => void,
    searchMeds: (text: string) => void
}

export type MedicineScreenProps =
    MedicineScreenParamProps &
    MedicineScreenDispatchProps &
    MedicineScreenDataProps