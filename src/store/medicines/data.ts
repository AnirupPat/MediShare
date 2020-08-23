import { MedicineStateType } from './types'
import { DummyData } from '../../models/dummy-data';


export const MedicineInitialState: MedicineStateType = {
    medicines: DummyData.medicine,
    medicineReview: DummyData.medicine,
    ProductsFilters: {
        filterProductCategories: 0,
        filterSKUNumber: 0
    },
    medicinePics: [],
    MedConfirm: {
        "composition": '',
        "count": 0,
        "drugName": '',
        "expiry": '',
        "id": null,
        "indication": '',
        "mobileNumber": null
    },
    notifications: DummyData.notifications
}