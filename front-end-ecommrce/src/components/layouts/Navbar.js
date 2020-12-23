import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { checkLogin } from '../../actions/authAction';
import { getUserFavorite } from '../../actions/favoriteAction';

const Navbar = ({
  auth: { user, isAuthenticated, isAdmin },
  cart: { cart },
  checkLogin,
  getUserFavorite,
}) => {
  // check if user is logeed in
  useEffect(() => {
    checkLogin();
    getUserFavorite();
  }, [checkLogin, getUserFavorite]);

  // search value
  const [search, setSearch] = useState('');

  // handle Submit Search
  const handleSearch = () => {
    window.location = `/search?search=${search}`;
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav'>
          <h1>
            Elecrto<span>Store</span>
          </h1>
          <div className='search-zone'>
            <form action='/search' onSubmit={handleSearch}>
              <input
                type='text'
                name='search'
                className='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <FaSearch className='search-icon' onClick={handleSearch} />
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
                {cart.length > 0 ? (
                  <span className='badge'>{cart.length} </span>
                ) : (
                  ''
                )}
              </Link>
            </li>
            {user !== null && isAuthenticated ? (
              <div class='dropdown'>
                <Link to='/dashboard' style={linkStyle}>
                  {' '}
                  {user}{' '}
                </Link>
                <div class='dropdown-content'>
                  <Link to='/dashboard'> Dashboard </Link>
                  <Link to='/'>Log out</Link>
                </div>
              </div>
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

const linkStyle = {
  fontSize: '18px',
  color: '#f5f0e1',
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});
export default connect(mapStateToProps, { checkLogin, getUserFavorite })(
  Navbar
);
