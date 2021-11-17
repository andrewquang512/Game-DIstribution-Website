import {
    ORDER_PLACE_REQUEST,
    ORDER_PLACE_SUCCESS,
    ORDER_PLACE_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL
} from '../constants/orderConstants'

export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PLACE_REQUEST:
            return { loading: true }
        case ORDER_PLACE_SUCCESS:
            return {
                loading: false,
                orderInfo: action.payload
            }
        case ORDER_PLACE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const listAllOrdersReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { loading: true }
        case ORDER_LIST_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case ORDER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}