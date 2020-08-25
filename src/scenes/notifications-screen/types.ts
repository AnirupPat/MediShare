import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { Notifications } from '../../models/notifications';
import { Medicine } from '../../models/medicines';


export type NotificationsScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'notifications'>

export type NotificationsScreenDataProps = {
    data: {
        // notification: Notifications[]
        notification: Medicine[]
    }
    title: string
}

export type NotificationsScreenState = { }

export type NotificationsScreenDispatchProps = {
    clearNotif: (id: string) => void
    setDecisionById: (id: string, label: string) => void
 }

export type NotificationsScreenProps =
    NotificationsScreenParamProps &
    NotificationsScreenDispatchProps &
    NotificationsScreenDataProps