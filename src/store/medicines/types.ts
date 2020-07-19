import { Medicine } from "../../models/medicines";
import { DummyData } from "../../models/dummy-data";

export type MedicineFilters = {
    filterProductCategories: number,
    filterSKUNumber: number
}

export type MedicineStateType = {
    medicines: Medicine[]
    ProductsFilters: MedicineFilters
}