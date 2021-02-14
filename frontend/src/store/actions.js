export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    ADD_TO_CART: 'ADD_TO_CART',
}

const { GET_PRODUCTS, ADD_TO_CART } = actionTypes;

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