import { Medicine } from "./medicines"
import { Donors } from './donors'
import { Notifications } from "./notifications"

export type DummyDataType = {
    medicine: Medicine[],
    donors: Donors[],
    notifications: Notifications[]
}

export const DummyData: DummyDataType = {
    medicine: require('../assets/data/medicines.json'),
    donors:   require('../assets/data/donors.json'),
    notifications: require('../assets/data/notifications.json')
}