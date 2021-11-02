import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"
import store from '../store'

export const addToCart = (id, quantity) => async (dispatch) => {
    const { data } = await axios.get(`/api/games/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            id: data._id,
            name: data.name,
            description: data.description,
            price: data.price,
            publisher: data.publisher,
            icon: data.icon,
            countInStock: data.countInStock,
            quantity: Number(quantity)
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch) => {
    const { data } = await axios.get(`/api/games/${id}`)
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: {
            id: data._id
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems))
}

