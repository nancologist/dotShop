import { Fragment } from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { dispatchGetProducts, dispatchPostProducts } from '../../store/thunks';

const Admin = (props) => {
    const { responseMsg } = props;
  
    // TODO BUG: When Admin cmp rerenders the responseMsg renews and so we get an alert!
    useEffect(() => {
      if(!!responseMsg) alert(responseMsg);
    }, [responseMsg]);

    const handleClick = () => {
        props.addSomeProducts();
    }

    return (
        <Fragment>
            <h1>Admin Page</h1>
            <button onClick={handleClick}>ADD PRODUCTS</button>
            <p>Here we would have CRUD functionalities for Amin to control Products, but it's not a main goal of project. So for now we mock the CREATE functionality to add some products to our shop.</p>
        </Fragment>
    )
};

const mapStateToProps = (reduxState) => {
    return {
      responseMsg: reduxState.responseMsg
    };
}
  
const mapDispatchToProps = {
    addSomeProducts: () => dispatchPostProducts()
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
