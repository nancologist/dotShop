export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS'
}

const { GET_PRODUCTS } = actionTypes;

export const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
}