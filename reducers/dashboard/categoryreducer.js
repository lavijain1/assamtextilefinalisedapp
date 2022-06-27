import { authconstants, dashboardconstants } from "../../actions/constants"


const initialstate = {
    loading: false,
    categories: [],
    error: '',
    offers: '',
    categoryfilter: ''
}

export default (state = initialstate, action) => {
    switch (action.type) {
        case dashboardconstants.CATEGORY_LIST_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case dashboardconstants.CATEGORY_LIST_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories,
                loading: false
            }
            break;
        case dashboardconstants.CATEGORY_LIST_FAILED:
            state = {
                ...initialstate,
                error: action.payload
            }
            break;
        case dashboardconstants.SET_OFFERS:
            state = {
                ...state,
                offers: action.payload
            }
            break;
      
        case dashboardconstants.SET_CATEGORY_FILTER:
            let cate = action.payload.name;
            state = {
                ...state,
                categoryfilter: cate
            }

    }
    return state;
}