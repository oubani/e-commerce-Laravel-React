import React from 'react';
import { FaHeart, FaCartPlus, FaRegHeart } from 'react-icons/fa';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../../actions/cartAction';

const ProductItem = ({ product, addToCart }) => {
  const { id, name, prix, thumbnail } = product;

  const addClick = ({ product }, qte = 1) => {
    const newProduct = {
      id,
      name,
      prix,
      thumbnail,
      quantity: qte,
    };
    addToCart(1, newProduct);
    // console.log(newProduct);
  };

  return (
    <div className='productItem'>
      <img src={thumbnail} alt={name} className='imgProduct' />
      <p className='proTitle'>{name}</p>
      <p> {prix} Dh</p>
      <div className='proPrice'>
        <p>
          <FaCartPlus className='clickedIcon' onClick={addClick} />
        </p>
        <p>
          {/* <FaHeart className='clickedIcon' /> */}
          <FaRegHeart className='clickedIcon' />
        </p>
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(ProductItem);
