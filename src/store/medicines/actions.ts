import { MedicineFilters, MedConfirm } from "./types"

export const SET_ALL_PRODUCT_HEADERS = 'SET_ALL_PRODUCT_HEADERS'
export const ADD_MAIN_CATEGORY = 'ADD_MAIN_CATEGORY'
export const SEARCH_MAIN_CATEGORY = 'SEARCH_MAIN_CATEGORY'
export const SEARCH_SUB_CATEGORY = 'SEARCH_SUB_CATEGORY'
export const ADD_SUB_CATEGORY = 'ADD_SUB_CATEGORY'
export const SET_PRODUCT_CATEGORY_FILTER = 'SET_PRODUCT_CATEGORY_FILTER'
export const SET_FILTERS = 'SET_FILTERS'
export const SET_SKU_NUMBER_FILTERS = 'SET_SKU_NUMBER_FILTERS'
export const SET_MEDICINE_PICS = 'SET_MEDICINE_PICS'
export const GET_MEDICINE_PICS = 'GET_MEDICINE_PICS'
export const GET_MED_CONFIRM = 'GET_MED_CONFIRM'
export const SET_MED_CONFIRM = 'SET_MED_CONFIRM'
export const CLEAR_MED_PICS = 'CLEAR_MED_PICS'

export interface SetAllProductHeaders {
    type: typeof SET_ALL_PRODUCT_HEADERS
    data: any
}

export interface addCategoryAction {
    type: typeof ADD_MAIN_CATEGORY
    category: string
}

export interface mainCategorySearch {
    type: typeof SEARCH_MAIN_CATEGORY
    search: string
}

export interface subCategorySearch {
    type: typeof SEARCH_SUB_CATEGORY
    search: string
}

export interface addSubCategory {
    type: typeof ADD_SUB_CATEGORY
    category: string,
    categoryId: number
}

export interface SetProductCategoryFilter {
    type: typeof SET_PRODUCT_CATEGORY_FILTER
    category: number
}

export interface SetFilter {
    type: typeof SET_FILTERS,
    productsFilters: MedicineFilters
}

export interface SetSKUNumberFilter {
    type: typeof SET_SKU_NUMBER_FILTERS,
    SKUNumber: number
}

export interface addMedicinePics {
    type: typeof SET_MEDICINE_PICS,
    image: any
}

export interface clearMedPics {
    type: typeof CLEAR_MED_PICS
}

export const clearMedPics = (): ProductsActionTypes => {
    return {
        type: CLEAR_MED_PICS
    }
}

export interface setMedConfirm {
    type: typeof SET_MED_CONFIRM,
    details: MedConfirm
}

export const setMedConfirm = (details: MedConfirm): ProductsActionTypes => {
    return {
        type: SET_MED_CONFIRM,
        details: details
    }
}

export const addMedicinePics = (image: any): ProductsActionTypes => {
    return {
        type: SET_MEDICINE_PICS,
        image: image
    }
}



export interface getMedicinePics {
    type: typeof GET_MEDICINE_PICS
}

export const getMedicinePics = (): ProductsActionTypes => {
    return {
        type: GET_MEDICINE_PICS
    }
}

export const SetAllProductHeaders = (data: any): ProductsActionTypes => {
    return {
        type: SET_ALL_PRODUCT_HEADERS,
        data: data
    }
}

export const addCategory = (category: string): ProductsActionTypes => {
    return {
        type: ADD_MAIN_CATEGORY,
        category: category
    }
}

export const mainCategorySearch = (value: string): ProductsActionTypes => {
    return {
        type: SEARCH_MAIN_CATEGORY,
        search: value
    }
}

export const subCategorySearch = (value: string): ProductsActionTypes => {
    return {
        type: SEARCH_SUB_CATEGORY,
        search: value
    }
}

export const addSubCategory = (category: string, categoryId: number): ProductsActionTypes => {
    return {
        type: ADD_SUB_CATEGORY,
        category: category,
        categoryId: categoryId
    }
}

export const setProductCategoryFilter = (category: number): ProductsActionTypes => {
    return {
        type: SET_PRODUCT_CATEGORY_FILTER,
        category: category
    }
}

export const setFilter = (productsFilters: MedicineFilters): ProductsActionTypes => {
    return {
        type: SET_FILTERS,
        productsFilters: productsFilters
    }
}

export const setSKUNumberFilter = (SKUNumber: number): ProductsActionTypes => {
    return {
        type: SET_SKU_NUMBER_FILTERS,
        SKUNumber: SKUNumber
    }
}

export type ProductsActionTypes = 
    SetAllProductHeaders
    | addCategoryAction
    | mainCategorySearch
    | subCategorySearch
    | addSubCategory
    | SetProductCategoryFilter
    | SetFilter
    | SetSKUNumberFilter
    | addMedicinePics
    | getMedicinePics
    | setMedConfirm
    | clearMedPics