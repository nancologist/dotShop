import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/Home/Home';
import ShopPage from './pages/Shop/Shop';
import OrderPage from './pages/Order/Order';
import AdminPage from './pages/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/order" exact component={OrderPage} />
          <Route path="/admin" exact component={AdminPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
