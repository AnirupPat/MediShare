import { Medicine } from "./medicines"
import { Donors } from './donors'

export type DummyDataType = {
    medicine: Medicine[],
    donors: Donors[]
}

export const DummyData: DummyDataType = {
    medicine: require('../assets/data/medicines.json'),
    donors:   require('../assets/data/donors.json')
}