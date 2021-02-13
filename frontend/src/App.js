import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/Home/Home';
import ShopPage from './pages/Shop/Shop';
import CartPage from './pages/Cart/Cart';
import AdminPage from './pages/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/admin" exact component={AdminPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
