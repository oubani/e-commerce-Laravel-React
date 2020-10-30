import React from 'react';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';


const CartItem = ({
  increment,
  decrement,
  removeFromCart,
  item: { id, thumbnail, name, quantity, prix }
}) => {
  if (quantity == 0) {
    removeFromCart(id);
  }
  return (
    <tr>
      <td>
        <img src={`http://localhost:8000/images/${thumbnail}`} />
      </td>
      <td>{name}</td>
      <td>
        <div  >
          <FaPlusCircle
            className='icon'
            onClick={() => { increment(id) }}
          />
        </div>
        <div>{quantity}</div>
        <div>
          <FaMinusCircle
            className='icon'
            disable={quantity.length === 0}
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

export default CartItem;
