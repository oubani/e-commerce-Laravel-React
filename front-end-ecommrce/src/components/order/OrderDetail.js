import React from 'react';
import { TBody, TDB } from '../shared/Table';

const OrderDetail = ({ detail }) => {
  console.log(detail);
  const { id, name, thumbnail, quantity, prix } = detail;
  return (
    <TBody>
      <TDB flex='1'>
        <img
          src={`http://localhost:8000/images/${thumbnail}`}
          width='100%'
          alt={name}
        />
      </TDB>
      <TDB flex='3'>{name}</TDB>
      <TDB>{prix} Dh</TDB>
      <TDB>{quantity}</TDB>
      <TDB>{prix * quantity} Dh </TDB>
    </TBody>
  );
};

export default OrderDetail;
