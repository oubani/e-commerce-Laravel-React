import React from 'react';
import { TBody, TD } from '../shared/Table';

const OrderDetail = ({ detail }) => {
  const { id, name, thumbnail, quantity, prix } = detail;
  return (
    <TBody key={id}>
      <TD>
        <img
          src={`http://localhost:8000/public/${thumbnail}`}
          width='100%'
          alt={name}
        />
      </TD>
      <TD>{name}</TD>
      <TD>{prix}</TD>
      <TD>{quantity}</TD>
      <TD>{prix * quantity}</TD>
    </TBody>
  );
};

export default OrderDetail;
