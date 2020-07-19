import { Medicine } from "./medicines"

export type DummyDataType = {
    medicine: Medicine[]
}

export const DummyData: DummyDataType = {
    medicine: require('../assets/data/medicines.json')
}