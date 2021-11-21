import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { gameListReducer, gameDetailsReducer, listGameFilterReducer } from "./reducers/gameReducers"
import { cartAddReducer } from "./reducers/cartReducers"
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer"
import { placeOrderReducer, listAllOrdersReducer } from "./reducers/orderReducers"

const cartItemFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []
const userFromStorage = localStorage.getItem('user') ?
    JSON.parse(localStorage.getItem('user')) : {}
const shippingAddressFromStore = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}
const paymentMethodFromStore = localStorage.getItem('paymentMethod') ?
    JSON.parse(localStorage.getItem('paymentMethod')) : {}


const reducer = combineReducers({
    gameList: gameListReducer,
    listGameFilter: listGameFilterReducer,
    gameDetails: gameDetailsReducer,
    cart: cartAddReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    orderInfo: placeOrderReducer,
    myOrders: listAllOrdersReducer
})

const initialState = {
    cart: {
        cartItems: cartItemFromStorage,
        shippingAddress: shippingAddressFromStore,
        paymentMethod: paymentMethodFromStore
    },
    userLogin: {
        user: userFromStorage.name ? userFromStorage : undefined
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store