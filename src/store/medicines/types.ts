import { Medicine } from "../../models/medicines";
import { DummyData } from "../../models/dummy-data";
import { Notifications } from "../../models/notifications";

export type MedicineFilters = {
    filterProductCategories: number,
    filterSKUNumber: number
}

export type MedicinePics = {
    image: string
}

export type MedConfirm = {
 "composition": string,
  "count": number,
  "drugName": string,
  "expiry": string,
  "id": null,
  "indication": string,
  "mobileNumber": null
}

export type MedicineStateType = {
    medicines: Medicine[]
    ProductsFilters: MedicineFilters,
    medicinePics: MedicinePics[],
    MedConfirm: MedConfirm,
    medicineReview: Medicine[],
    notifications: Notifications[],
    searchMeds: Medicine[]
}