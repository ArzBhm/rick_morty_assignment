import {
    ERROR, 
    FETCH_CHARACTERS_SUCCESS, 
    FETCH_LOCATIONS_SUCCESS,
    MODAL_OPEN_CLOSE,
    PAGE_DECREMENT,
    PAGE_INCREMENT, 
    SET_SEARCH_TEXT
} from './actionTypes'

const reducer = (state: any, action: { type: any; payload: any | null} ) => {
    switch (action.type) {
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
                loading: false,
                notFound: false
            }
        case FETCH_LOCATIONS_SUCCESS:
            return {
                ...state,
                originsLocations: action.payload,
                loading: false,
                notFound: false
            }
        case ERROR:
            return {
                ...state,
                notFound: action.payload
            }
        case MODAL_OPEN_CLOSE:
            return {
                ...state,
                isOpen: action.payload
            }
        case PAGE_INCREMENT:
            return {
                ...state,
                pageNum: action.payload
            }
        case PAGE_DECREMENT:
            return {
                ...state,
                pageNum: action.payload
            }
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }
        default:
            return state
    }
}

export default reducer