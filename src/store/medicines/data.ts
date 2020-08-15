import { MedicineStateType } from './types'
import { DummyData } from '../../models/dummy-data';


export const MedicineInitialState: MedicineStateType = {
    medicines: DummyData.medicine,
    ProductsFilters: {
        filterProductCategories: 0,
        filterSKUNumber: 0
    },
    medicinePics: []
}