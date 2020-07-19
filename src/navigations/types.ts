import { Authentication } from "../store/core/types";
import { CoreReduxStateType } from '../store/core/types'

export type AppNavigationParamProps = {
    core: CoreReduxStateType
}

export type AppNavigationState = { }

export type AppNavigationDispatchProps = { }

export type AppNavigationProps = AppNavigationParamProps & AppNavigationDispatchProps