import React, { useState, useEffect } from 'react';
import { SideNav } from './dashboard/SideNav/SideNav';
import { authApi, link } from '../../Api/Api';
import { Product } from '../product/SoldOutProducts';
import Loading from '../layouts/Loading';
import Pagination from '../layouts/Pagination/Pagination';

const ProductListePage = () => {
  const [productsListe, setProductList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
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
          <div
            style={{
              display: 'flex',
              marginInline: 'auto',
              maxWidth: '900px',
              padding: '10px 0',
              textAlign: 'center',
              fontSize: '1.2rem',
              background: 'var(--main-blue-color)',
              color: 'var(--main-white-color)',
            }}
          >
            <div style={{ flex: 1 }}>Image</div>
            <div style={{ flex: 2 }}>Name</div>
            <div style={{ flex: 2 }}>Stock</div>
            <div style={{ flex: 2 }}>Update</div>
          </div>
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
