import React, { useState } from 'react';
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
import axios from 'axios';
import { link } from './Api/Api';
import FavoritesPage from './components/pages/FavoritesPage';
import ProductListePage from './components/pages/ProductListePage';
import { OrdersPage } from './components/pages/OrdersPage';
import Footer from './components/layouts/Footer';

function App() {
  // handle visits

  const splitedCookies = document.cookie.split(';');

  var visitC = splitedCookies[0].split('=')[1];

  const [visit, setVisit] = useState(false || visitC);

  if (!visit) {
    var ip = fetch('http://api.ipify.org/?format=json').then((results) =>
      results.json()
    );

    var date = new Date(),
      expires = 'expires=';

    expires += date.setTime(date.getTime() + 31536000000).toString();

    document.cookie = ` visit = ${true}  ; ${expires} ;path=/ `;
    if (!ip) {
      ip = '134:321:562:322';
    }
    axios.post(`${link}/visit`, { ip });

    setVisit(true);
  }

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
          <Route path='/productsListe' component={ProductListePage} />
          <Route path='/addProduct' component={AddProductPage} />
          <Route path='/favorites' component={FavoritesPage} />
          <Route path='/orders' component={OrdersPage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
