import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// pages
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import CartPage from './components/pages/CartPage';
import SearchPage from './components/pages/SearchPage';
import ProductPage from './components/pages/ProductPage';
import Dashdoard from './components/pages/dashboard/Dashdoard';
// components
import Navbar from './components/layouts/Navbar';
import './App.css';
import AddProductPage from './components/pages/AddProductPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cart' component={CartPage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/Dashboard' component={Dashdoard} />
          <Route path='/addProduct' component={AddProductPage} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
}

export default App;
