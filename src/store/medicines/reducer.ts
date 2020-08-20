import { ProductsActionTypes, SET_CHECKBOX, CLEAR_MED_PICS, SET_MED_CONFIRM, GET_MEDICINE_PICS, SET_ALL_PRODUCT_HEADERS, SET_MEDICINE_PICS, ADD_MAIN_CATEGORY, SEARCH_MAIN_CATEGORY, SEARCH_SUB_CATEGORY, ADD_SUB_CATEGORY, SET_PRODUCT_CATEGORY_FILTER, SET_FILTERS, SET_SKU_NUMBER_FILTERS } from './actions';
import { MedicineInitialState } from './data'
import { MedicineStateType, MedicineFilters, MedConfirm } from './types';
import { DummyData } from '../../models/dummy-data';

const updateAllProductHeaderDetails = (state: MedicineStateType, data: any): MedicineStateType => {
    return {
        ...state,
        medicines: DummyData.medicine
    }
}

const setFilters = (state: MedicineStateType, productsFilters: MedicineFilters): MedicineStateType => {
    // console.log(productsFilters.filterProductCategories +' products filter')
    // console.log(productsFilters.filterSKUNumber+ ' SKU Number filter')
    return {
        ...state,
        ProductsFilters: productsFilters
    }
}

const setSKUNumberFilter = (state: MedicineStateType, SKUNumber: number): MedicineStateType => {
    // console.log(SKUNumber +' selected SKU Number')
    return {
        ...state,
        ProductsFilters: {
            ...state.ProductsFilters,
            filterSKUNumber: SKUNumber
        }
    }
}

const addMedPics = (state: MedicineStateType, image: string): MedicineStateType => {
    return {
        ...state,
        medicinePics: [...state.medicinePics, {
            image
        }]
    }
}

const getMedicinePics = (state: MedicineStateType): MedicineStateType => {
    return {
        ...state
    }
}

const setMedConfirm = (state: MedicineStateType, details: MedConfirm): MedicineStateType => {
    return {
        ...state,
        MedConfirm: details
    }
}

const clearMedPics = (state: MedicineStateType): MedicineStateType => {
    return {
        ...state,
        medicinePics: []
    }
}

const setCheckBox = (state: MedicineStateType, id: string, value: boolean): MedicineStateType => {
    console.log(id)
    return {
        ...state,
        medicines: state.medicines.map((med) => {
            if(med.id.toString() == id) {
                med.fields.selected = value
            }
            return med
        })

    }
}

export const MedicineReducer = (state = MedicineInitialState, action: ProductsActionTypes): MedicineStateType => {
    switch (action.type) {
        case SET_ALL_PRODUCT_HEADERS:
            return updateAllProductHeaderDetails(state, action.data)
        case SET_FILTERS:
            return setFilters(state, action.productsFilters)
        case SET_SKU_NUMBER_FILTERS:
            return setSKUNumberFilter(state, action.SKUNumber)
        case SET_MEDICINE_PICS:
            return addMedPics(state, action.image)
        case GET_MEDICINE_PICS:
            return getMedicinePics(state)  
        case SET_MED_CONFIRM:
            return setMedConfirm(state, action.details)
            case CLEAR_MED_PICS:
                return clearMedPics(state)  
            case SET_CHECKBOX:
                return setCheckBox(state, action.id, action.value)
        default:
            return state
    }
}