import React, { useState, useEffect } from 'react';
import { authApi, link } from '../../Api/Api';
import Loading from '../layouts/Loading';
import Pagination from '../layouts/Pagination/Pagination';
import OrderItem from '../order/OrderItem';
import { TD, THead } from '../shared/Table';
import { SideNav } from './dashboard/SideNav/SideNav';

export const OrdersPage = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ordersType, setOrdersType] = useState(0);
  const [page, setPage] = useState(1);

  const validateOrder = (id) => {
    authApi
      .post(`${link}/validateOrder`, { id })
      .then(() => {
        // setOrders()
      })
      .catch(() => {
        console.log('Something went wrong please check again');
      });
  };

  const body = {
    page,
    ordersType,
  };

  useEffect(() => {
    // set the function
    async function getOrders() {
      setLoading(true);
      const res = await authApi.get(`${link}/getOrders`, {
        params: body,
      });
      setOrders(res.data);
      setLoading(false);
    }

    // call the function
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [body.page, body.ordersType]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <SideNav />
        <div style={{ flex: '5', flexDirection: 'column', padding: '10px' }}>
          <h1 style={{ marginBottom: '2rem' }}>Orders Page : </h1>
          <THead>
            <TD>Order</TD>
            <TD>address</TD>
            <TD>Date Order</TD>
            <TD>Status</TD>
            <TD>Action</TD>
          </THead>
          {loading && <Loading />}
          {!loading && orders ? (
            <div>
              {orders.data.map((order) => (
                <OrderItem order={order} key={order.id} />
              ))}
              <Pagination
                currentPage={orders.current_page}
                lastPage={orders.last_page}
                setPage={setPage}
                body={body}
              />
            </div>
          ) : (
            <p1> You dont have any orders </p1>
          )}
        </div>
      </div>
    </div>
  );
};
