import { actionTypes } from './actions';

const initialState = {
    products: [],
    cart: []
}

const { GET_PRODUCTS, ADD_TO_CART, DECREASE_ITEM, INCREASE_ITEM } = actionTypes;

export const shopReducer = (state = initialState, action) => {
    const { productId } = action;
    const item = state.cart.find(item => item.id === productId)
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.products };

        case ADD_TO_CART:
            const product = state.products.find(prod => prod.id === productId);
            let itemIndex = state.cart.findIndex(item => item.id === productId);
            if (itemIndex > -1) {
                state.cart[itemIndex].unit++;
                return state
            }
            const newItem = { ...product, unit: 1 };
            return { ...state, cart: [ ...state.cart, newItem ]};

        case DECREASE_ITEM:
            item.unit--
            console.log(item.unit);
            break;

        case INCREASE_ITEM:
            item.unit++
            console.log(item.unit);
            break;
    }
    return state;
}
    