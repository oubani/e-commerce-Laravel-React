import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { checkLogin } from '../../actions/authAction';

const Navbar = ({
  auth: { user, isAuthenticated },
  cart: { cart },
  checkLogin,
}) => {
  // check if user is logeed in
  useEffect(() => {
    checkLogin();
  }, []);

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
              <select name='categorie'>
                <option value='none'>All</option>
                <option value='Smart Phone'>Smart Phone</option>
                <option value='Laptops'>Laptops</option>
                <option value='Headphones'>Laptops</option>
              </select>
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
              <Link to='/product/1'> Product 1</Link>
            </li>
            <li>
              <Link to='/cart'>
                <FaShoppingCart className='cart-icon' />
                <span className='badge'>{cart.length} </span>
              </Link>
            </li>
            {user !== null && isAuthenticated ? (
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
