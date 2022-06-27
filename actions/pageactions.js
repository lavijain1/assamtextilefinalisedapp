import { authconstants } from "./constants"

export const pagechange = (page) => {
    return async dispatch => {
        dispatch({ type: authconstants.PAGE_CHANGE, payload: page});
    }
}