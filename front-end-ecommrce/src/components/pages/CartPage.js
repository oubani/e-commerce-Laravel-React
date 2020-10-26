import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart/CartItem';
import {
  removeFromCart,
  incrementItem,
  decrementItem,
  emptyCart
} from '../../actions/cartAction';
import { FaTrashAlt } from 'react-icons/fa';

const CartPage = ({ 
  cart: { cart },
  removeFromCart,
  incrementItem,
  emptyCart,
  decrementItem }) => {

    const increment = (id) => {
      incrementItem(id);
    };
    const decrement = (id) => {
      decrementItem(id);
    };

  if (cart.length === 0) {
    return (
      <h1 style={{ marginTop: '2rem', textAlign: 'center' }}>
        The cart is empty Start shopping now
      </h1>
    );
  }

  let total ;
  total=0;
  cart.forEach(element => {
    total += element.prix * element.quantity
  });
  const handleEmpty = () => emptyCart()  ;
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>quantity</th>
            <th>prix</th>
            <th>total</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} increment={increment} removeFromCart={removeFromCart} decrement={decrement} />
          ))}
          <tr>
            <td style={{textAlign:'left'}} colSpan='4' > Total</td>
            <td  > {total} Dh </td>
            <td> Empty Cart <FaTrashAlt
          className='icon'

          style={{ width: '2rem',color:'red' }}
          onClick={handleEmpty}
        /> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps,{ removeFromCart, incrementItem, decrementItem,emptyCart } )(CartPage);
