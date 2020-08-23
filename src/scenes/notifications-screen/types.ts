import { StackScreenProps } from '@react-navigation/stack';
import { MedicineStackNavigationParamsType } from '../../store/core/types'
import { Notifications } from '../../models/notifications';


export type NotificationsScreenParamProps = StackScreenProps<MedicineStackNavigationParamsType, 'notifications'>

export type NotificationsScreenDataProps = {
    data: {
        notification: Notifications[]
    }
    title: string
}

export type NotificationsScreenState = { }

export type NotificationsScreenDispatchProps = {
    clearNotif: (id: string) => void
 }

export type NotificationsScreenProps =
    NotificationsScreenParamProps &
    NotificationsScreenDispatchProps &
    NotificationsScreenDataProps