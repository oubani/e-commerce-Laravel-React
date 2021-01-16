import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SideNav } from './dashboard/SideNav/SideNav';

const ProductListePage = () => {
  const link = process.env.REACT_APP_DOMAIN;

  const [productsListe, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`${link}/allProducts`);
      return response.data.products;
    };
    setProductList(getProducts());
  }, []);

  return (
    <>
      <div>
        <div style={{ display: 'flex' }}>
          <SideNav />
          <div style={{ flex: '5', flexDirection: 'column', padding: '10px' }}>
            {productsListe.length > 0 &&
              productsListe.map((product) => <div>hi</div>)}
          </div>
        </div>
      </div>{' '}
    </>
  );
};

export default ProductListePage;
