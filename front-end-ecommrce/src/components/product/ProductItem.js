import React from 'react';
import { FaHeart, FaCartPlus, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartAction';

const ProductItem = ({ product, addToCart }) => {
  const { id, name, prix, thumbnail } = product;

  if (localStorage.getItem('favorites') === null) {
    let LocalFavorites = [];
    localStorage.setItem('favorites', JSON.stringify(LocalFavorites));
  }

  const addToFavorite = (id) => {
    if (localStorage.getItem('favorites') === null) {
      let LocalFavorites = [];
      localStorage.setItem('favorites', JSON.stringify(LocalFavorites));
    }
    var localFavorites = JSON.parse(localStorage.getItem('favorites'));

    if (!localFavorites.includes(id)) {
      localFavorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(localFavorites));
    }
  };

  const favorites = JSON.parse(localStorage.getItem('favorites'));

  const addClick = ({ product }, qte = 1) => {
    const newProduct = {
      id,
      name,
      prix,
      thumbnail,
      quantity: qte,
    };
    addToCart(1, newProduct);
  };

  return (
    <div className='productItem'>
      <Link style={{ color: 'black' }} to={`/product/${id}`}>
        <img
          src={`http://localhost:8000/images/${thumbnail}`}
          alt={name}
          className='imgProduct'
        />
        <p className='proTitle'>{name}</p>
      </Link>
      <p> {prix} Dh</p>
      <div className='proPrice'>
        <p>
          <FaCartPlus className='clickedIcon' onClick={addClick} />
        </p>
        <p>
          {!favorites.includes(id) ? (
            <FaRegHeart
              className='clickedIcon'
              onClick={() => addToFavorite(id)}
            />
          ) : (
            <FaHeart className='clickedIcon' />
          )}
        </p>
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(ProductItem);
