import { MedicineStateType } from './types'
import { DummyData } from '../../models/dummy-data';
import { Medicine } from "../../models/medicines";

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
    notifications: DummyData.notifications,
    searchMeds: DummyData.medicine
}