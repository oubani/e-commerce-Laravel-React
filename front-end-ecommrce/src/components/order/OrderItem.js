import React, { useState } from 'react';
import styled from 'styled-components';
import { SeeBtn } from '../pages/UserListeIem';
import OrderModal from './OrderModal';

const OrderItem = ({ order }) => {
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { id, address, created_at, status } = order;

  // HandleClick funcion

  const handleClick = (id) => {
    setOrderId(id);
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <OrderLine>
      <OrderModal show={show} onClose={onClose} orderId={orderId} />
      <OrderTd>{id}</OrderTd>
      <OrderTd>{address}</OrderTd>
      <OrderTd>{created_at}</OrderTd>
      <OrderTd>
        {status ? (
          <p style={{ color: 'green' }}> delivred </p>
        ) : (
          <p style={{ color: 'red' }}> not delivred </p>
        )}
      </OrderTd>
      <OrderTd>update</OrderTd>
      <OrderTd>
        <SeeBtn onClick={() => handleClick(id)}>Order Details</SeeBtn>
      </OrderTd>
    </OrderLine>
  );
};

export default OrderItem;

export const OrderLine = styled.div`
  display: flex;
  margin: 1rem auto;
  max-width: 900px;
  padding: 10px 0;
  text-align: center;
  align-items: center;
  font-size: 1rem;
  color: #121212;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const OrderTd = styled.div`
  flex: 2;
`;
