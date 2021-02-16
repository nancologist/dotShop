import { useRef } from 'react';
import axios from 'axios';

import './Admin.css';
import SlidingMsg from '../../components/SlidingMsg/SlidingMsg';

const Admin = () => {
    const msgEl = useRef();
    const postAddProducts = async () => {
        let res;
        try {
            res = await axios.post('http://localhost:8989/admin');
        } catch (error) {
            console.log(error);
        }
        msgEl.current.showMsg(res.data.msg);
    }

    return (
        <div className="admin">
            <h1>Admin Page</h1>
            <p>Here we would have CRUD functionalities for Admin to control Products, but it's not a main goal of project. So for now we mock the CREATE functionality to add some products to our shop.</p>
            <hr/>
            <button className="admin__add-btn" onClick={postAddProducts}>ADD PRODUCTS & COUPONS TO DB</button>
            <SlidingMsg ref={msgEl} time={1500} />
            <div>
                <h2>Orders:</h2>
                Here would have admin an overview of the submitted Orders by customer, which are fetched from Backend > Database
            </div>
        </div>
    )
};

export default Admin;