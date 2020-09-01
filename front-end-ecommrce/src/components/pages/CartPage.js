import React from 'react';
import { connect } from 'react-redux';

const CartPage = ({ cart: { cart } }) => {
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
          <tr>
            <td>img</td>
            <td>Huawei y7 prime 2019</td>
            <td>9</td>
            <td>1000 Dh</td>
            <td>9000 Dh</td>
            <td>delete</td>
          </tr>
          {cart.map((item) => (
            <h1>{item.name}</h1>
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
