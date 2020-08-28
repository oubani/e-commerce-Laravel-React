import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMostOrderd } from '../../actions/productAction';
import ProductItem from '../product/ProductItem';

const MostOrderd = ({ products: { newProducts }, getMostOrderd }) => {
  useEffect(() => {
    getMostOrderd();
    //
  }, []);
  return (
    <div className='container'>
      <h1>Most Ordered</h1>
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

export default connect(mapStateToProps, { getMostOrderd })(MostOrderd);
