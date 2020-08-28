import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductItem = ({ product }) => {
  const { name, prix, thumbnail } = product;
  return (
    <div className='productItem'>
      <img src={thumbnail} alt={name} className='imgProduct' />
      <p className='proTitle'>{name}</p>
      <div className='proPrice'>
        <p> {prix} Dh</p>
        <p>
          {/* <FaHeart /> */}
          <FaRegHeart />
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
