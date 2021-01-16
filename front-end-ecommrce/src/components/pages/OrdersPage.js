import React from 'react';
import { SideNav } from './dashboard/SideNav/SideNav';

export const OrdersPage = () => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <SideNav />
        <div style={{ flex: '5', flexDirection: 'column', padding: '10px' }}>
          <h1>Orders Page : </h1>
        </div>
      </div>
    </div>
  );
};
