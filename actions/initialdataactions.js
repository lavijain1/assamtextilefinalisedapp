import {axiosnew} from '../helpers/axios';
import { dashboardconstants } from './constants';

export const initialdata = () => {
    return async dispatch => {
        dispatch({ type: dashboardconstants.PRODUCT_LIST_REQUEST});
        dispatch({ type: dashboardconstants.CATEGORY_LIST_REQUEST });
        try{
            const res = await axiosnew.post('/initialdata');
            const { categories, products} = res.data;
            dispatch({ type: dashboardconstants.CATEGORY_LIST_SUCCESS, payload: {categories} });
            dispatch({ type: dashboardconstants.PRODUCT_LIST_SUCCESS, payload: {products}});
        }catch{
            dispatch({ type: dashboardconstants.CATEGORY_LIST_FAILED, payload: "Currently updating website, Please try again later"});
            dispatch({ type: dashboardconstants.PRODUCT_LIST_FAILED, payload:  "Currently updating website, Please try again later"});
        }
       
  
    }
   
}
export const getoffers = () => {
    return async dispatch => {
        const res = await axiosnew.get('/getoffer');
        if(res.status === 200){

            dispatch({ type: dashboardconstants.SET_OFFERS, payload: res.data.offers})

        }
    }
}