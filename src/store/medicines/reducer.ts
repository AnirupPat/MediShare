import { ProductsActionTypes, SET_ALL_PRODUCT_HEADERS, ADD_MAIN_CATEGORY, SEARCH_MAIN_CATEGORY, SEARCH_SUB_CATEGORY, ADD_SUB_CATEGORY, SET_PRODUCT_CATEGORY_FILTER, SET_FILTERS, SET_SKU_NUMBER_FILTERS } from './actions';
import { MedicineInitialState } from './data'
import { MedicineStateType, MedicineFilters } from './types';
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

export const MedicineReducer = (state = MedicineInitialState, action: ProductsActionTypes): MedicineStateType => {
    switch (action.type) {
        case SET_ALL_PRODUCT_HEADERS:
            return updateAllProductHeaderDetails(state, action.data)
        case SET_FILTERS:
            return setFilters(state, action.productsFilters)
        case SET_SKU_NUMBER_FILTERS:
            return setSKUNumberFilter(state, action.SKUNumber)
        default:
            return state
    }
}