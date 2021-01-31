import React, { useState, useEffect } from 'react';
import { SideNav } from './dashboard/SideNav/SideNav';
import { authApi, link } from '../../Api/Api';
import { Product } from '../product/SoldOutProducts';
import Loading from '../layouts/Loading';
import Pagination from '../layouts/Pagination/Pagination';
import { THead, TDH } from '../shared/Table';

const ProductListePage = () => {
  const [productsListe, setProductList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const body = {
    page: page,
  };

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const response = await authApi.get(`${link}/allProducts`, {
        params: body,
      });
      setProductList(response.data.products);
      setLoading(false);
    }
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <SideNav />
        <div style={{ flex: '5', flexDirection: 'column', padding: '10px' }}>
          <h1 style={{ margin: '1rem auto' }}>Products Liste</h1>
          <h3 style={{ marginBottom: '1rem' }}>
            {' '}
            Total Products: {productsListe ? ` ${productsListe.total}` : ' '}
          </h3>
          <THead>
            <TDH style={{ flex: 1 }}>Image</TDH>
            <TDH style={{ flex: 2 }}>Name</TDH>
            <TDH style={{ flex: 2 }}>Stock</TDH>
            <TDH style={{ flex: 2 }}>Update</TDH>
          </THead>
          <div
            style={{
              marginInline: 'auto',
              maxWidth: '900px',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '5px 0px',
            }}
          >
            {productsListe &&
              productsListe.data.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            <div style={{ margin: '1rem' }}> </div>
            {productsListe && (
              <Pagination
                currentPage={productsListe.current_page}
                lastPage={productsListe.last_page}
                setPage={setPage}
                body={body}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListePage;
