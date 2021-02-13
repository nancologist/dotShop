import axios from 'axios';
import './Admin.css';

const Admin = () => {
    const postAddProducts = async () => {
        let res;
        try {
            res = await axios.post('http://localhost:8989/admin');
        } catch (error) {
            console.log(error);
        }
        alert(res.data.msg)
    }

    return (
        <div className="admin">
            <h1>Admin Page</h1>
            <p>Here we would have CRUD functionalities for Admin to control Products, but it's not a main goal of project. So for now we mock the CREATE functionality to add some products to our shop.</p>
            <button className="admin__add-btn" onClick={postAddProducts}>ADD PRODUCTS</button>
        </div>
    )
};

export default Admin;