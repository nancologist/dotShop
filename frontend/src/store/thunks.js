import axios from 'axios';
import { actionTypes } from './actions'

const { GET_PRODUCTS } = actionTypes;

export const initGetProducts = () => {
    return async (dispatch) => {
        let products;

        try {
            products = await axios.get('localhost:8989');
        } catch (error) {
            console.log(error);
        }

        console.log(products); // CHECK POINT
        // ...
    }
}