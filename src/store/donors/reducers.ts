import { DonorsActionTypes, SET_ALL_DONORS } from './actions';
import { DonorsInitialState } from './data'
import { DonorsStateType } from './types';
import { DummyData } from '../../models/dummy-data';

const updateAllDonorsDetails = (state: DonorsStateType): DonorsStateType => {
    return {
        ...state,
        donors: DummyData.donors
    }
}



export const DonorsReducer = (state = DonorsInitialState, action: DonorsActionTypes): DonorsStateType => {
    switch (action.type) {
        case SET_ALL_DONORS:
            return updateAllDonorsDetails(state)
        default:
            return state
    }
}