import axios from 'axios';
import { actionTypes, getProducts, postProducts } from './actions'

const { GET_PRODUCTS } = actionTypes;

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
