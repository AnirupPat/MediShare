export const SET_ALL_DONORS = 'SET_ALL_DONORS'

export interface SetAllDonors {
    type: typeof SET_ALL_DONORS
}

export const SetAllDonors = (): DonorsActionTypes => {
    return {
        type: SET_ALL_DONORS
    }
}


export type DonorsActionTypes = 
    SetAllDonors   