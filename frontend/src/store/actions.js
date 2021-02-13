export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    POST_PRODUCTS: 'POST_PRODUCTS',
}

const { GET_PRODUCTS, POST_PRODUCTS } = actionTypes;

export const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
};

export const postProducts = (msg) => {
    return {
        type: POST_PRODUCTS,
        msg
    }
};