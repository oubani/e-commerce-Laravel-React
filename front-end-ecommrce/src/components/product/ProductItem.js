import React from 'react';
import { FaHeart, FaCartPlus, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartAction';
import {
  addToFavorite,
  removeFromFavorites,
} from '../../actions/favoriteAction';

const ProductItem = ({
  favorite,
  product,
  addToCart,
  addToFavorite,
  removeFromFavorites,
}) => {
  const { id, name, prix, thumbnail } = product;

  const favoritesListe = favorite.favorites;

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
          {!favoritesListe.includes(id) ? (
            <FaRegHeart
              className='clickedIcon'
              onClick={() => addToFavorite(id)}
            />
          ) : (
            <FaHeart
              className='clickedIcon'
              onClick={() => removeFromFavorites(id)}
            />
          )}
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  favorite: state.favorite,
});

export default connect(mapStateToProps, {
  addToCart,
  addToFavorite,
  removeFromFavorites,
})(ProductItem);
