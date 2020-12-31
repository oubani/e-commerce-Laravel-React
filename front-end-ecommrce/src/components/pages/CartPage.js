import React, { useState } from 'react';
import { authApi } from '../../Api/Api';
import { connect } from 'react-redux';
import CartItem from '../cart/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StripeCheckout from 'react-stripe-checkout';
import {
  removeFromCart,
  incrementItem,
  decrementItem,
  emptyCart,
} from '../../actions/cartAction';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartPage = ({
  cart: { cart },
  auth,
  product: { product },
  removeFromCart,
  incrementItem,
  emptyCart,
  decrementItem,
}) => {
  // use State
  const [address, setAdrress] = useState('nr 64 let elifillaha 2 errachidia ');

  // validate order function
  const validateOrder = async (token) => {
    if (address !== '' && cart.length > 0) {
      const body = {
        address: address,
        cart: JSON.stringify(cart),
        token: JSON.stringify(token),
      };

      const res = await authApi.post('http://localhost:8000/api/order', body);
      console.log(res);
      if (res.data.message === 'success') {
        toast.success('your order is saved successfully !');
        setTimeout(() => {
          emptyCart();
        }, 5000);
      } else {
        toast.warning('Please try again youtr order is not complited ');
      }
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
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
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
          <tr>
            <td colSpan='6'>
              {auth ? (
                <StripeCheckout
                  token={validateOrder}
                  stripeKey='pk_test_51I4SBBE0xgzcmyARAYvR0cDzeJbVSlUHS2P0Tdas0xZeGI01Y7FUO9CMiHJrSNvmiprqhyn1Ax3gVnPIkBar3Y2o009j3IR4sT'
                  amount={total * 10}
                  email='oubani@gm.com'
                />
              ) : (
                <p>
                  Log in first to validate your order{' '}
                  <Link to='/login'> Here </Link>{' '}
                </p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <ToastContainer />
      {/* <div className='card' style={AddressCard}>
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
      </div> */}
    </div>
  );
};

const ButtonStyle = {
  color: 'white',
  backgroundColor: '#B80201',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  borderRadius: '5px',
};
// const ButtonConfirmStyle = {
//   color: 'white',
//   letterSpacing: '3px',
//   fontSize: '1rem',
//   backgroundColor: '#2e856e',
//   padding: '0.8rem 8rem ',
//   borderRadius: '5px',
//   borderStyle: 'none',
// };

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
  product: state.product,
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  removeFromCart,
  incrementItem,
  decrementItem,
  emptyCart,
})(CartPage);
