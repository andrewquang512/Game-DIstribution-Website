import { 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM, 
    SAVE_SHIPPING_INFO_SUCCESS,
    SAVE_PAYMENT_METHOD_SUCCESS, 
    CART_REMOVE_ALL_ITEMS
} from "../constants/cartConstants"

export const cartAddReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find(x => x.id === item.id)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.id === item.id ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            const item1 = action.payload

            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.id != item1.id)
            }
        case CART_REMOVE_ALL_ITEMS:
            return {
                ...state,
                cartItems: []
            }
        case SAVE_SHIPPING_INFO_SUCCESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        case SAVE_PAYMENT_METHOD_SUCCESS:
            return {
                ...state,
                paymentMethod: action.payload
            }
        default:
            return state
    }
}