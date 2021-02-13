import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { dispatchGetProducts, dispatchPostProducts } from './store/thunks';

function App(props) {
  const { getProducts, responseMsg } = props;

  useEffect(() => { getProducts() }, [getProducts]);

  useEffect(() => {
    if(!!responseMsg) alert(responseMsg);
  }, [responseMsg]);

  const handleClick = () => {
    props.addSomeProducts();
  }

  return (
    <div className="App">
      {/* Navigation ... */}
      {/* Switch ... */}

      {/* Admin adds some products: */}
      <button onClick={handleClick}>ADD PRODUCTS</button>

      <div>{props.products.map(prod => (
        // <h3>{prod.name}</h3>
        <img src={prod.imgPath} />
      ))}</div>

    </div>
  );
}

const mapStateToProps = (reduxState) => {
  return {
    products: reduxState.products,
    responseMsg: reduxState.responseMsg
  };
}

const mapDispatchToProps = {
  getProducts: () => dispatchGetProducts(),
  addSomeProducts: () => dispatchPostProducts()
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
