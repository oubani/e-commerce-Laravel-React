import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FaPlusCircle, FaMinusCircle, FaCartPlus } from 'react-icons/fa';
import Loading from '../layouts/Loading';
import { getProduct } from '../../actions/productAction';
import { addToCart } from '../../actions/cartAction';
import style from './ProductPage.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = ({ addToCart, match }) => {
  const [product, setProduct] = useState(null);

  // const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  // get the product id
  const id = match.params.id;

  // add item to cart function
  const addItem = (productInfo) => {
    if (quantity > 0) {
      const item = {
        id: productInfo.id,
        name: productInfo.name,
        thumbnail: productInfo.thumbnail,
        prix: productInfo.prix,
        quantity,
      };

      addToCart(quantity, item);

      toast.success('Item added to cart ');

      setQuantity(0);
    } else {
      toast.info(' Plase set quantity ');
    }
  };

  useEffect(() => {
    async function fetchData(id) {
      // get product info
      const response = await getProduct(id);

      setProduct(response.data);
    }

    fetchData(id);
  }, []);

  if (product) {
    // distract data
    const { productInfo, images } = product;

    // distruct styles
    const {
      productSection,
      pImages,
      pDesc,
      description,
      price,
      stock,
      header,
      Pprice,
      sImag,
      pImag,
      imagesSection,
      primaryImage,
    } = style;

    return (
      <>
        <div className='container my-2'>
          <div className={productSection}>
            <div className={pImages}>
              <div className={imagesSection}>
                {images.map((image) => (
                  <img
                    key={image.id}
                    alt={image.name}
                    src={`http://localhost:8000/images/${image.thumbnail}`}
                    className={sImag}
                  />
                ))}
              </div>
              <div className={primaryImage}>
                <img
                  key={product.id}
                  alt={product.thumbnail}
                  src={`http://localhost:8000/images/${productInfo.thumbnail}`}
                  className={pImag}
                />
              </div>
            </div>
            <div className={pDesc}>
              <h1 className={header}>{productInfo.name}</h1>
              <p className={description}>{productInfo.description}</p>
              <p className={Pprice}>
                prix : <span className={price}> {productInfo.prix} Dh</span>
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
                      onClick={() => {
                        if (quantity > 0) setQuantity(quantity - 1);
                      }}
                    />
                  </div>
                </div>
                <div>
                  total : <b> {productInfo.prix * quantity} Dh</b>
                </div>
              </div>
              <button
                className='btn btn-primary'
                style={btnStyle}
                onClick={() => addItem(productInfo)}
              >
                <p>Add To Cart</p>
                <FaCartPlus style={{ marginLeft: '3rem', fontSize: '2rem' }} />
              </button>
              <ToastContainer />
            </div>
          </div>
          <div className='productsSemillar'></div>
        </div>
      </>
    );
  } else return <Loading />;
};

const btnStyle = {
  padding: '1rem 2rem',
  width: '100%',
  fontSize: '1rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default connect(null, { addToCart })(ProductPage);
