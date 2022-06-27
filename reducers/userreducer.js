import { registerconstants } from "../actions/constants";

const initialstate = {
    signedupnow: false,
    searchfield: '',
    filter: '',
    datefilter: '',
    asked: 'notasked',
};

export default (state = initialstate, action) => {
    switch(action.type)
    {
        case registerconstants.USER_RESET:
            state = {
                ...initialstate
            }
            break;
        case registerconstants.SET_USER_SEARCHFIELD:
            state = {
                ...state,
                searchfield: action.payload
            }
            break;
        case registerconstants.SET_FILTER:
            state = {
                ...state,
                filter: action.payload
            }
            break;
        case registerconstants.REMOVE_FILTER:
            state = {
                ...state,
                filter: ''
            }
    case registerconstants.SET_DATE_FILTER:
                state = {
                    ...state,
                    datefilter: action.payload
                }
                break;
    case registerconstants.REMOVE_DATE_FILTER:
                state = {
                    ...state,
                    datefilter: ''
                }
                break;
    case registerconstants.SET_ASK_USER:
                    state = {
                        ...state,
                        asked: action.payload
                    }
                    break;
    case registerconstants.REMOVE_ASK_USER:
                    state = {
                        ...state,
                        asked: ''
                    }
    }

    return state;
}