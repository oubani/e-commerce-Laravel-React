import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getHighPromotion } from '../../../actions/productAction';
import ProductItem from '../../product/ProductItem';

const HighPromoted = ({ products: { newProducts }, getHighPromotion }) => {
  useEffect(() => {
    getHighPromotion();
    //
  }, []);
  return (
    <div className='container'>
      <h1>High Promoted</h1>
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

export default connect(mapStateToProps, { getHighPromotion })(HighPromoted);
