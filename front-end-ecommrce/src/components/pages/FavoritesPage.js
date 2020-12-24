import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductItem from '../product/ProductItem';

const FavoritesPage = ({ favorite }) => {
  const favorites = favorite.favorites;

  return (
    <>
      <div className='container'>
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))
        ) : (
          <p>
            You don't have any favorite items <br />
            <Link to='/'> See products </Link>
          </p>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  favorite: state.favorite,
});

export default connect(mapStateToProps, null)(FavoritesPage);
