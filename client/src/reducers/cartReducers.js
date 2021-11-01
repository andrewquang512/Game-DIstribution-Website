import { CART_ADD_ITEM} from "../constants/cartConstants"

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
        default:
            return state
    }
}