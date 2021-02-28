import axios from 'axios';
import { getProducts, postOrderSuccess } from './actions'
const { REACT_APP_SERVER_URL } = process.env;

export const dispatchGetProducts = () => {
    return async (dispatch) => {
        let res;

        try {
            res = await axios.get(REACT_APP_SERVER_URL + '/shop');
        } catch (error) {
            console.log(error);
        }

        dispatch(getProducts(res.data.products));
    }
};

export const dispatchSubmitCheckout = (couponCode) => {
    return async (dispatch, getState) => {
        let res;

        const { cart: order } = getState();
        try {
            res = await axios.post(
                REACT_APP_SERVER_URL + '/shop/order',
                { order, couponCode }
            );
        } catch (error) {
            console.log(error);
        }

        dispatch(postOrderSuccess());
    }
};
