import * as constants from '../constants';

export interface IncrementEnthusiasm {
        type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
        type: constants.DECREMENT_ENTHUSIASM;
}

export interface RequestSuccess {
        type: constants.REQUEST_SUCCESS;
}

export interface RequestFailure {
        type: constants.REQUEST_FAILURE;
}

export type RequestAction = RequestSuccess | RequestFailure;

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
        return {
                type: constants.INCREMENT_ENTHUSIASM
        };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
        return {
                type: constants.DECREMENT_ENTHUSIASM
        };
}

export function requestSuccess(): RequestSuccess {
        return {
                type: constants.REQUEST_SUCCESS
        };
}

export function requestFailure(): RequestFailure {
        return {
                type: constants.REQUEST_FAILURE
        };
}