import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNewProducts } from '../../../actions/productAction';
import ProductItem from '../../product/ProductItem';

const NewProducts = ({ products: { newProducts }, getNewProducts }) => {
  useEffect(() => {
    getNewProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='container'>
      <h1>New Products</h1>
      <section className='ProductsSection'>
        {newProducts &&
          newProducts.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product,
});

export default connect(mapStateToProps, { getNewProducts })(NewProducts);
