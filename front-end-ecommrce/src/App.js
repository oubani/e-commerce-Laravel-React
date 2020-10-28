import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// pages
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
// components
import Navbar from './components/layouts/Navbar';
// import Footer from './components/layouts/Footer';
import './App.css';
import CartPage from './components/pages/CartPage';
import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cart' exact component={CartPage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/product/:id' component={ProductPage} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
}

export default App;
