import axios from 'axios';
import { getProducts } from './actions'

export const dispatchGetProducts = () => {
    return async (dispatch) => {
        let res;

        try {
            res = await axios.get('http://localhost:8989/shop');
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
        console.log(couponCode);

        try {
            res = await axios.post(
                'http://localhost:8989/shop/order',
                { order, couponCode }
            );
        } catch (error) {
            console.log(error);
        }

        // dispatch(action...) after Response!
    }
};
