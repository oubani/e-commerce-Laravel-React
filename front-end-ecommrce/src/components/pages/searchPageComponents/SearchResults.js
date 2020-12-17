import React from 'react';
import ProductItem from '../../product/ProductItem';

const SearchResults = ({ products }) => {
  return (
    <div style={displayProducts}>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

// styles
const displayProducts = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
};

export default SearchResults;
