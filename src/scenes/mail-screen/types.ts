import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { Medicine } from '../../models/medicines';


export type MailScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'mail'>

export type MailScreenDataProps = {
    data: Medicine[]
}

export type MailScreenState = { }

export type MailScreenDispatchProps = {

}

export type MailScreenProps = MailScreenDataProps & MailScreenParamProps & MailScreenDispatchProps