import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'


export type MailScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'mail'>

export type MailScreenState = { }

export type MailScreenDispatchProps = {

}

export type MailScreenProps = MailScreenParamProps & MailScreenDispatchProps