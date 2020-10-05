import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart/CartItem';
const CartPage = ({ cart: { cart } }) => {
  if (cart.length === 0) {
    return (
      <h1 style={{ marginTop: '2rem', textAlign: 'center' }}>
        The cart is empty Start shopping now
      </h1>
    );
  }
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
            <CartItem item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(CartPage);
