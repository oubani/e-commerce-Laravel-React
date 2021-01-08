import React, { useEffect, useState } from 'react';

const SoldOutProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: 'Sony Camera Alpha IIV',
        stock: 8,
        thambnail: 'camera.png',
      },
      {
        id: 2,
        name: 'Samsung tv',
        stock: 5,
        thambnail: 'tv.webp',
      },
      {
        id: 3,
        name: 'Sony TV 4K Resolution Alpha IIV',
        stock: 3,
        thambnail: 'tv2.webp',
      },
      {
        id: 4,
        name: 'Camera Camera Alpha IIV',
        stock: 1,
        thambnail: 'camera.png',
      },
    ]);
  }, []);

  return (
    <>
      <h1 style={{ margin: '20px 5px' }}>Sold Out Products</h1>
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
        {products.length > 0 &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default SoldOutProducts;

export const Product = ({ product }) => (
  <div
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      fontSize: '1.1rem',
      borderBottom: '1px solid #ccc ',
    }}
  >
    <div style={{ flex: 1 }}>
      <img
        width='100%'
        src={`http://localhost:8000/images/${product.thambnail}`}
        alt={product.name}
      />
    </div>
    <div style={{ flex: 2 }}> {product.name} </div>
    <div style={{ flex: 2, color: '#ff2f2f' }}> {product.stock} </div>
    <div style={{ flex: 2 }}> Update </div>
  </div>
);
