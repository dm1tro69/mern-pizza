import {
    PLACE_ORDER_FAILED,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
} from "./constans";

export const orderReducer = (state={}, action) => {
    switch (action.type) {
        case PLACE_ORDER_REQUEST:
            return {...state, isLoading: true}
        case PLACE_ORDER_SUCCESS:
            return {...state, isLoading: false, success: true}
        case PLACE_ORDER_FAILED:
            return {...state, isLoading: false, error: action.payload}
        default:
            return  {...state}

    }
}
