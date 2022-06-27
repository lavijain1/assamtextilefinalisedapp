import {combineReducers }from 'redux';
import userreducer from './userreducer';
import categoryreducer from './dashboard/categoryreducer';
import productreducer from './dashboard/productreducer';
const rootReducer = combineReducers({
    user: userreducer,
    categorylist: categoryreducer,
    productlist: productreducer,
});
export default rootReducer;