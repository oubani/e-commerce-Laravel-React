import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { checkLogin } from '../../actions/authAction';

const Navbar = ({
  auth: { user, isAuthenticated },
  cart: { cart },
  checkLogin,
}) => {
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav'>
          <h1>
            Elecrto<span>Store</span>
          </h1>
          <div className='search-zone'>
            <form>
              <select name='categorie'>
                <option value='none'>All</option>
                <option value='Smart Phone'>Smart Phone</option>
                <option value='Laptops'>Laptops</option>
                <option value='Headphones'>Laptops</option>
              </select>
              <input type='text' name='search' className='search' />
              <FaSearch className='search-icon' />
            </form>
            <ul className='search-results'></ul>
          </div>
          <ul>
            <li>
              <Link to='/'> Products</Link>
            </li>
            <li>
              <Link to='/cart'>
                <FaShoppingCart className='cart-icon' />
                <span className='badge'>{cart.length} </span>
              </Link>
            </li>
            {user !== null ? (
              <li>
                <Link to='/dashboard'> {user.name} </Link>
              </li>
            ) : (
              <Fragment>
                <li>
                  <Link to='/login'> Login</Link>
                </li>
                <li>
                  <Link to='/register'> Register</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});
export default connect(mapStateToProps, { checkLogin })(Navbar);
