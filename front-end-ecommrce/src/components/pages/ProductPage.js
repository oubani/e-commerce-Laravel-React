import React, { useState, useEffect } from 'react';
import { FaPlusCircle, FaMinusCircle, FaCartPlus } from 'react-icons/fa';
import { getProduct } from '../../actions/productAction';
import { addToCart } from '../../actions/cartAction';
import style from './ProductPage.module.css';

const ProductPage = (props) => {
  // State
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // get the product id
  const id = props.match.params.id;

  // add item to cart function
  const addItem = (productInfo) => {
    console.log('product Clicked');
    if (quantity > 0) {
      const item = {
        id: productInfo.id,
        name: productInfo.name,
        thumbnail: productInfo.thumbnail,
      };
      console.log(quantity, item);
      addToCart(quantity, item);
    } else {
      console.log('product not added');
    }
  };
  useEffect(async () => {
    const response = await getProduct(id);
    setProduct(response.data);
  }, []);

  if (product) {
    const { productInfo, images } = product;
    const {
      productSection,
      pImages,
      pDesc,
      description,
      price,
      stock,
      header,
      Pprice,
    } = style;
    return (
      <div className='container my-2'>
        <div className={productSection}>
          <div className={pImages}>
            {images.map((img) => (
              <p> {img.thumbnail} </p>
            ))}
          </div>
          <div className={pDesc}>
            <h1 className={header}>{productInfo.name}</h1>
            <p className={description}>{productInfo.description}</p>
            <p className={Pprice}>
              {' '}
              prix : <span className={price}> {productInfo.prix} Dh</span>{' '}
            </p>
            <p className={stock}> en Stock : {productInfo.stock}</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '70%',
              }}
            >
              <div>Quantity :</div>
              <div
                style={{
                  padding: '1rem 3rem',
                  margin: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div>
                  <FaPlusCircle
                    className='icon'
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </div>
                <div>{quantity}</div>
                <div>
                  <FaMinusCircle
                    className='icon'
                    disable={quantity.length === 0}
                    onClick={() => {
                      if (quantity > 0) setQuantity(quantity - 1);
                    }}
                  />
                </div>
              </div>
              <div>total:{productInfo.prix * quantity} Dh</div>
            </div>
            <button
              className='btn btn-primary'
              style={btnStyle}
              onClick={() => addItem(productInfo)}
            >
              <p>Add To Cart</p>
              <FaCartPlus style={{ marginLeft: '3rem', fontSize: '2rem' }} />
            </button>
          </div>
        </div>
        <div className='productsSemillar'></div>
      </div>
    );
  } else return <p>Loading</p>;
};

const btnStyle = {
  display: 'block',
  padding: '1rem 2rem',
  width: '100%',
  fontSize: '1rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default ProductPage;
