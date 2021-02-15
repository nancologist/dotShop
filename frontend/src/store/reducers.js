import { actionTypes } from './actions';

const initialState = {
    products: [],
    cart: []
}

const { GET_PRODUCTS, ADD_TO_CART, DECREASE_ITEM, INCREASE_ITEM } = actionTypes;

export const shopReducer = (state = initialState, action) => {
    const { productId } = action;
    const findProduct = (id) => state.products.find(prod => prod.id === id);
    const findItem = (id) => state.cart.find(item => item.id === id);
    const findItemIndex = (id) => state.cart.findIndex(item => item.id === id);
    
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.products };

        case ADD_TO_CART:
            const product = findProduct(productId);
            const itemIndex = findItemIndex(productId);
            if (itemIndex > -1) {
                state.cart[itemIndex].unit++;
                return state
            }
            const newItem = { ...product, unit: 1 };
            return { ...state, cart: [ ...state.cart, newItem ]};

        case DECREASE_ITEM:
            let newCart = [ ...state.cart ];
            const itemIndex2 = findItemIndex(productId);
            const item = state.cart[itemIndex2];
            const shouldRemoveItem = state.cart[itemIndex2].unit < 2;
            if (shouldRemoveItem) {
                newCart = state.cart.filter(item => item.id !== productId)
            } else {
                item.unit--;
                newCart[itemIndex2] = item;
            }
            state = {
                ...state,
                cart: newCart
            }
            return state

        case INCREASE_ITEM:
            const itemIndex3 = findItemIndex(productId);
            const item2 = state.cart[itemIndex3];
            item2.unit++;
            const newCart2 = [ ...state.cart ];
            newCart2[itemIndex3] = item2;
            state = {
                ...state,
                cart: newCart2
            }
            return state
    }
    return state;
}
