import { actionTypes } from './actions';

const initialState = {
    products: []
}

const { GET_PRODUCTS, POST_PRODUCTS } = actionTypes;

export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.products };
    
        default:
            return state;
    }
}
    