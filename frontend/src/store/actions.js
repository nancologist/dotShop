export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    ADD_TO_CART: 'ADD_TO_CART',
    DECREASE_ITEM: 'DECREASE_ITEM',
    INCREASE_ITEM: 'INCREASE_ITEM',
    POST_ORDER_SUCCESS: 'POST_ORDER_SUCCESS',
    RESET_ORDER_STATE: 'RESET_ORDER_STATE'
}

const {
    GET_PRODUCTS, ADD_TO_CART, RESET_ORDER_STATE,
    DECREASE_ITEM, INCREASE_ITEM, POST_ORDER_SUCCESS
} = actionTypes;

export const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
};

export const dispatchAddToCart = (id) => {
    return {
        type: ADD_TO_CART,
        productId: id
    }
}

export const dispatchDecreaseItem = (id) => {
    return {
        type: DECREASE_ITEM,
        productId: id
    };
};

export const dispatchIncreaseItem = (id) => {
    return {
        type: INCREASE_ITEM,
        productId: id
    };
};

export const postOrderSuccess = () => {
    return {
        type: POST_ORDER_SUCCESS,
    };
}

export const dispatchResetOrderState = () => {
    return {
        type: RESET_ORDER_STATE
    }
}