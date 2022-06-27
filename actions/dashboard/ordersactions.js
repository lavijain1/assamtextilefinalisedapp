import { orderconstants } from '../constants';


export const selectquantity = (quantity) => {
    return async (dispatch) => {
        dispatch({type: orderconstants.SET_QUANTITY, payload: quantity });
    }
}