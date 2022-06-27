
import { cartconstants } from '../constants';

export const addproducttocart = (prod, qty, method, cart) => {
   

    const { _id, slug, quantity} = prod.product? prod.product: prod;
    var index = cart ? cart.findIndex(x => x.slug === slug) : (-1);

    const quanti = method? (1): parseInt(qty);
    var quant = (index !== (-1)) ? (cart[index].quantity +1) : 0;
    var realprice = prod.price;
if(prod.offerprice){
    realprice = prod.offerprice;
}

    return async dispatch => {
        if(quanti <= quantity && quant <= quantity ){
            dispatch({type: cartconstants.ADD_CART_REQUEST});
                dispatch({ type: cartconstants.ADD_CART_SUCCESS, payload: {prod, qty}})
    
      
        
    }
}
}

   
export const deletecartproduct = (product) => {
    return async dispatch => {

                dispatch({ type: cartconstants.DELETE_CARTITEM_SUCCESS, payload: product})
                
    }
}


export const cartreset = () => {
    return async dispatch => {
        dispatch({type: cartconstants.CART_RESET})
    }
}

