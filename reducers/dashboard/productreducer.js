import { authconstants, cartconstants, dashboardconstants } from "../../actions/constants"


const initialstate = {
    loading: false,
    products: [],
    productscopy: [],
    error: '',
    currentPage: 1,
    pageSize: 16,
    cart: []
}

const updatecart = (cartitems, product, quantity) => {
    let cart = cartitems;
    var productprice = product.offerprice? product.offerprice : product.price
    if(cart.length == 0){
        cart = [{product: {...product}, quantity:1, price: productprice, slug: product.slug}]
        return cart;
    }
  
    var index = cart.findIndex(x => x.slug === product.slug);
    if(index !== -1){
        if(cart[index].quantity > quantity)
        {
            var newquantity = (cart[index].quantity - 1);
        }else{
        var newquantity = (cart[index].quantity + 1);
        }
        var slugy = product.slug;
        cart[index].quantity = newquantity
    }else{
       cart.push({  
             product: {...product},
             quantity: 1,
             price:productprice,
              slug: product.slug})
              return cart;
            }
    return cart;
}


const deletecartitem = (cartitems, product) => {
    let newcart = cartitems
    
    newcart = newcart.filter((p)=> p.slug!== product.slug);
    return newcart;
}


const sizedcart = (cart, product, size) => {
    let newcart = [
        ...cart
    ];
    var index = newcart.findIndex(x => x.slug === product.slug);
    if(index !== -1){
        cart[index].size = size;
    }
    return newcart;
}
export default (state = initialstate, action) => {
    switch(action.type){
        case dashboardconstants.PRODUCT_LIST_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case dashboardconstants.PRODUCT_LIST_FAILED:
            state = {
                ...initialstate,
                error: action.payload
            }
        case dashboardconstants.PRODUCT_LIST_SUCCESS:
            state = {
                ...state,
                products: action.payload.products,
                productscopy: action.payload.products.slice()
            }
            break;
        case authconstants.PAGE_CHANGE:
            state = {
                ...state,
                currentPage: action.payload
            }
            break;
        case cartconstants.ADD_CART_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case cartconstants.ADD_CART_SUCCESS:
            const newcart = updatecart(state.cart, action.payload.prod, action.payload.qty)
            state = {
                ...state,
                cart: [...newcart],
                loading: false
            }
            break;
        case cartconstants.ADD_CART_FAILED:
            state = {
                ...state,
                error: action.payload,
                loading: false
            }
            break;
        case cartconstants.DELETE_CARTITEM_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case cartconstants.DELETE_CARTITEM_SUCCESS:
            const deletecart = deletecartitem(state.cart, action.payload);
            state = {
                ...state,
                loading: false,
                cart: [...deletecart]
            }
            break;
        case cartconstants.ADJUST_SIZE:
            const sizecart = sizedcart(state.cart, action.payload.product, action.payload.size)
            state={
                ...state,
                cart: [...sizecart]
            }
            break;
        case cartconstants.DELETE_CARTITEM_FAILED:
            state = {
                ...state,
                loading: false
            }
            break;
        case cartconstants.CART_RESET:
            state = {
                ...state,
                cart: []
            }
            break;
    }
    return state;
}