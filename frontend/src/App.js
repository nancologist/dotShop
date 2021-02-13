import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { dispatchGetProducts, dispatchPostProducts } from './store/thunks';

function App(props) {
  const { getProducts, products } = props;

  useEffect(() => {
    if(!!responseMsg) alert(responseMsg);
  }, [responseMsg]);


  return (
    <div className="App">
      {/* Navigation ... */}
      {/* Switch ... */}

      <div>Here are my products...</div>

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
