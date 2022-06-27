import {registerconstants} from './constants';


export const reset = () => {
    return async dispatch => {
        dispatch({ type: registerconstants.USER_RESET});
    }
}

export const searchfield = (field) => {
    return async dispatch => {
        dispatch ({ type: registerconstants.SET_USER_SEARCHFIELD, payload: field })
    }
}
export const setfilter = (field) => {
    return async dispatch => {
        dispatch ({ type: registerconstants.SET_FILTER, payload: field })
    }
}
export const setdatefilter = (field) => {
    return async dispatch => {
        dispatch ({ type: registerconstants.SET_DATE_FILTER, payload: field })
    }
}
export const removedatefilter = () => {
    return async dispatch => {
        dispatch ({ type: registerconstants.REMOVE_DATE_FILTER })
    }
}
export const removefilter = () => {
    return async dispatch => {
        dispatch ({ type: registerconstants.REMOVE_FILTER })
    }
}
export const askuser = (field) => {
    return async dispatch => {
        dispatch ({ type: registerconstants.SET_ASK_USER, payload: field })
    }
}
export const removeaskuser = () => {
    return async dispatch => {
        dispatch ({ type: registerconstants.REMOVE_ASK_USER })
    }
}