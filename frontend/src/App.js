import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
