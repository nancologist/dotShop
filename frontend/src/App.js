import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { initGetProducts } from './store/thunks';

function App(props) {
  const { getProducts } = props;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
    products: reduxState.products
  };
}

const mapDispatchToProps = {
  getProducts: () => initGetProducts()
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
