import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { gameListReducer, gameDetailsReducer } from "./reducers/gameReducers"
import { cartAddReducer } from "./reducers/cartReducers"
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer"

const cartItemFromStorage = localStorage.getItem('cartItems') ? 
                JSON.parse(localStorage.getItem('cartItems')) : []

const userFromStorage = localStorage.getItem('user') ?
                JSON.parse(localStorage.getItem('user')) : {}
const reducer = combineReducers({
    gameList: gameListReducer,
    gameDetails: gameDetailsReducer,
    cart: cartAddReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})

const initialState = {
    cart: {
        cartItems: cartItemFromStorage
    },
    userLogin: {
        user: userFromStorage
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store