import { actionTypes } from './actions';

const initialState = {
    products: [],
    cart: []
}

const { GET_PRODUCTS, ADD_TO_CART } = actionTypes;

export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.products };

        case ADD_TO_CART:
            const { productId } = action;
            const product = state.products.find(prod => prod.id === productId);
            
            let item;
            let itemIndex = state.cart.findIndex(item => item.id === productId);
            
            if (itemIndex > -1) {
                state.cart[itemIndex].unit++;
                return state
            } else {
                item = {
                    ...product,
                    unit: 1
                }
            }

            return {
                ...state,
                cart: [ ...state.cart, item ]
            }

    
        default:
            return state;
    }
}
    