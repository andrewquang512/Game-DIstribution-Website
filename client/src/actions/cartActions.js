import axios from 'axios'
import { CART_ADD_ITEM } from "../constants/cartConstants"
import store from '../store'

export const addToCart = (id) => async (dispatch) => {
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
            countInStock: data.countInStock
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems))
}