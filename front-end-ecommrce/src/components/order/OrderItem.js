import React, { useState } from 'react';
import styled from 'styled-components';
import { authApi, link } from '../../Api/Api';
import { SeeBtn } from '../pages/UserListeIem';
import OrderModal from './OrderModal';

const OrderItem = ({ order, validateOrder }) => {
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [details, setDetails] = useState(null);
  const { id, address, date, status } = order;
  const [loading, setLoading] = useState(false);
  // HandleClick funcion
  const handleClick = (id) => {
    setOrderId(id);
    getOrderDetails(id);
    setShow(true);
  };

  async function getOrderDetails(id) {
    try {
      setLoading(true);
      const res = await authApi.get(`${link}/getOrderDetails?id=${id}`);
      setDetails(res.data);
      setLoading(false);
    } catch (error) {}
  }

  const onClose = () => {
    setShow(false);
  };

  return (
    <OrderLine>
      <OrderModal
        show={show}
        onClose={onClose}
        loading={loading}
        details={details}
        status={status}
        orderId={orderId}
        validateOrder={validateOrder}
      />
      <OrderTd>{id}</OrderTd>
      <OrderTd>{address}</OrderTd>
      <OrderTd>{date}</OrderTd>
      <OrderTd>
        {status ? (
          <p style={{ color: 'green' }}> delivred </p>
        ) : (
          <p style={{ color: 'red' }}> not delivred </p>
        )}
      </OrderTd>
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
  align-self: center;
  margin: auto;
`;
