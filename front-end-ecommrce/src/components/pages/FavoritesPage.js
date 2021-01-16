import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductItem from '../product/ProductItem';
import { SideNav } from './dashboard/SideNav/SideNav';

const FavoritesPage = ({ favorite }) => {
  const favorites = favorite.favorites;
  const [favoriteProducts, setFavoritesPro] = useState([]);

  useEffect(() => {}, [favorites]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <SideNav />
        <div style={{ flex: '5', flexDirection: 'column', padding: '10px' }}>
          {favoriteProducts.length > 0 ? (
            favoriteProducts.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))
          ) : (
            <p style={{ textAlign: 'center', marginTop: '30px' }}>
              You don't have any favorite items <br />
              <Link to='/'> See products </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorite: state.favorite,
});

export default connect(mapStateToProps, null)(FavoritesPage);
