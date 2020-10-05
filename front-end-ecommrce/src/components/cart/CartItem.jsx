import React from 'react';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const CartItem = ({ item: { thumbnail, name, quantity, prix } }) => {
  return (
    <tr>
      <td>
        <img src={thumbnail} alt='' srcset='' />
      </td>
      <td>{name}</td>
      <td>
        <div>
          <FaPlusCircle className='icon' />
        </div>
        <div>{quantity}</div>
        <div>
          <FaMinusCircle className='icon' />
        </div>
      </td>
      <td>
        {prix} <span>Dh</span>
      </td>
      <td>
        {prix * quantity} <span> Dh </span>
      </td>
      <td>
        <FaTrashAlt className='icon' style={{ width: '2rem' }} />
      </td>
    </tr>
  );
};

export default CartItem;
