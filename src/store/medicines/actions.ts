import { MedicineFilters, MedConfirm } from "./types"
import { Medicine } from "../../models/medicines"

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
export const SET_CHECKBOX = 'SET_CHECKBOX'
export const CLEAR_NOTIF = 'CLEAR_NOTIF'
export const  SET_MED = 'SET_MED'
export const SEARCH_MEDS = 'SEARCH_MEDS'
export const REDUCE_MED_COUNT = 'REDUCE_MED_COUNT'
export const SET_DECISION = "SET_DECISION"
export const SET_DECISION_BY_ID = "SET_DECISION_BY_ID"

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

export interface setCheckBox {
    type: typeof SET_CHECKBOX,
    id: string,
    value: boolean
}

export interface setMedicine {
    type: typeof SET_MED,
    medDetails: Medicine
}

export interface clearNotif {
    type: typeof CLEAR_NOTIF,
    id: string
}

export interface searchMeds {
    type: typeof SEARCH_MEDS,
    text: string
}

export interface reduceMedCount {
    type: typeof REDUCE_MED_COUNT,
    key: string
}

export interface setDecision {
    type: typeof SET_DECISION,
    label: string
}

export interface setDecisionById {
    type: typeof SET_DECISION_BY_ID,
    id: string,
    label: string
}

export const setDecisionById = (id: string,label: string): ProductsActionTypes => {
    return {
        type: SET_DECISION_BY_ID,
        id,
        label
    }
}

export const setDecision = (label: string): ProductsActionTypes => {
    return {
        type: SET_DECISION,
        label
    }
}

export const reduceMedCount = (key: string): ProductsActionTypes => {
    return {
        type: REDUCE_MED_COUNT,
        key
    }
}

export const searchMeds = (text: string): ProductsActionTypes => {
    return {
        type: SEARCH_MEDS,
        text
    }
}

export const clearNotif = (id: string): ProductsActionTypes => {
    return {
        type: CLEAR_NOTIF,
        id
    }
}

export const setMedicine = (medDetails: Medicine): ProductsActionTypes => {
    return {
        type: SET_MED,
        medDetails
    }
}

export const setCheckBox = (id: string, value: boolean): ProductsActionTypes => {
    return {
        type: SET_CHECKBOX,
        id: id,
        value: value
    }
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
    | setCheckBox
    | setMedicine
    | clearNotif
    | searchMeds
    | reduceMedCount
    | setDecision
    | setDecisionById