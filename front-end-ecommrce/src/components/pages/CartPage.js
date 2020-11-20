import React, { useState } from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  removeFromCart,
  incrementItem,
  decrementItem,
  emptyCart,
} from '../../actions/cartAction';
import { FaRegTrashAlt } from 'react-icons/fa';

const CartPage = ({
  cart: { cart },
  removeFromCart,
  incrementItem,
  emptyCart,
  decrementItem,
}) => {
  // use State
  const [address, setAdrress] = useState('تجزءة الفلاحة 2 رقم 45 الرشيدية');

  // validate order function
  const validateOrder = () => {
    if (address !== '' && cart.length > 0) {
      toast.success('your order is saved successfully !');
    }
  };
  // increment and decrement items in cart
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

  let total;
  total = 0;
  cart.forEach((element) => {
    total += element.prix * element.quantity;
  });
  const handleEmpty = () => emptyCart();
  return (
    <div
      className='container'
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
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
            <CartItem
              item={item}
              key={item.id}
              increment={increment}
              removeFromCart={removeFromCart}
              decrement={decrement}
            />
          ))}
          <tr>
            <td style={{ textAlign: 'left' }} colSpan='4'>
              {' '}
              Total
            </td>
            <td> {total} Dh </td>
            <td>
              <div style={ButtonStyle} onClick={handleEmpty}>
                Empty Cart
                <FaRegTrashAlt style={{ marginLeft: '1.5rem' }} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ToastContainer />
      <div className='card' style={AddressCard}>
        <h3>Address</h3>
        <textarea
          style={{ margin: '15px auto' }}
          name='address'
          id='address'
          required
          cols='30'
          rows='4'
          value={address}
          onChange={(e) => setAdrress(e.target.value)}
        ></textarea>
        <button style={ButtonConfirmStyle} onClick={validateOrder}>
          Confirm
        </button>
      </div>
    </div>
  );
};

const ButtonStyle = {
  color: 'white',
  backgroundColor: '#ff3232',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  borderRadius: '5px',
};
const ButtonConfirmStyle = {
  color: 'white',
  backgroundColor: '#ff3232',
  padding: '0.8rem',
  borderRadius: '5px',
  borderStyle: 'none',
};

const AddressCard = {
  color: 'black',
  // backgroundColor: '#1E3D59',
  marginTop: '28px',
  padding: '10px 15px',
  borderRadius: '5px',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  removeFromCart,
  incrementItem,
  decrementItem,
  emptyCart,
})(CartPage);
