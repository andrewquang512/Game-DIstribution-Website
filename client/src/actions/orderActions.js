import axios from 'axios'
import {
    ORDER_PLACE_REQUEST,
    ORDER_PLACE_SUCCESS,
    ORDER_PLACE_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL
} from '../constants/orderConstants'

export const placeOrder = ({ id, 
    orderItems, shippingAddress, 
    paymentMethod, shippingPrices, 
    orderPrices, totalPrices, isPaid }) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_PLACE_REQUEST })

        const { data } = await axios.post('/api/order', {
            id,
            orderItems,
            shippingAddress,
            paymentMethod,
            shippingPrices,
            orderPrices,
            totalPrices,
            isPaid
        })

        dispatch({
            type: ORDER_PLACE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_PLACE_FAIL,
            error: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}

export const listMyOrders = (id) =>  async (dispatch) => {
    try {
        dispatch({ type: ORDER_LIST_REQUEST })

        const { data } = await axios.post('/api/order/myorder', { id })

        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            error: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
}
