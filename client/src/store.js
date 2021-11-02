import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { gameListReducer } from "./reducers/gameReducers"
import { cartAddReducer } from "./reducers/cartReducers"

const cartItemFromStorage = localStorage.getItem('cartItems') ? 
                JSON.parse(localStorage.getItem('cartItems')) : []

const reducer = combineReducers({
    gameList: gameListReducer,
    cart: cartAddReducer
})

const initialState = {
    cart: {
        cartItems: cartItemFromStorage
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store