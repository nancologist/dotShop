import axios from 'axios';
import { actionTypes, getProducts } from './actions'

const { GET_PRODUCTS } = actionTypes;

export const initGetProducts = () => {
    return async (dispatch) => {
        let res;

        try {
            // Admin adds some products:
            // await axios.post('http://localhost:8989/admin');

            res = await axios.get('http://localhost:8989/shop');
        } catch (error) {
            console.log(error);
        }

        dispatch(getProducts(res.data.products));
    }
}