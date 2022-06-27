import {axiosnew} from '../../helpers/axios';
import { dashboardconstants } from '../constants';


export const getcategorylist = () => {

    return async (dispatch) => {
        dispatch({ type: dashboardconstants.CATEGORY_LIST_REQUEST})
        const res = await axiosnew.get('/get/category');
        if(res.status === 200 ){
            const {categoryList } = res.data;
            dispatch({
                type: dashboardconstants.CATEGORY_LIST_SUCCESS,
                payload: { categories: categoryList}
            })
        }
        else {
            dispatch({
                type: dashboardconstants.CATEGORY_LIST_FAILED,
                payload: "Failed to load Categories"
            })
        }
    }
}



export const handlecategoryfilter = (category) => {
    return async (dispatch) => {
        dispatch({ type: dashboardconstants.SET_CATEGORY_FILTER, payload: category});
    }
}