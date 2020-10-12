import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle, FaFontAwesomeLogoFull } from 'react-icons/fa';
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from '../../actions/cartAction';

const CartItem = ({
  item: { id, thumbnail, name, quantity, prix },
  removeFromCart,
  incrementItem,
  decrementItem,
}) => {
  const increment = (id) => {
    console.log(quantity);
    incrementItem(id);
  };
  const decrement = (id) => {
    console.log('decrement =', id);
    decrementItem(id);
  };
  return (
    <tr>
      <td>
        <img src={thumbnail} />
      </td>
      <td>{name}</td>
      <td>
        <div>
          <FaPlusCircle
            className='icon'
            onClick={() => {
              increment(id);
            }}
          />
        </div>
        <div>{quantity}</div>
        <div>
          <FaMinusCircle
            className='icon'
            disable={quantity.length == 0}
            onClick={() => quantity > 0 && decrement(id)}
          />
        </div>
      </td>
      <td>
        {prix} <b>Dh</b>
      </td>
      <td>
        {prix * quantity} <b> Dh </b>
      </td>
      <td>
        <FaTrashAlt
          className='icon'
          style={{ width: '2rem' }}
          onClick={() => removeFromCart(id)}
        />
      </td>
    </tr>
  );
};

export default connect(null, { removeFromCart, incrementItem, decrementItem })(
  CartItem
);
