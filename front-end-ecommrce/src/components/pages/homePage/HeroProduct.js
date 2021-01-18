import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { link } from '../../../Api/Api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroProduct = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const res = await axios.get(`${link}/lastProduct`);
      setProduct(res.data);
    }
    getProduct();
  }, []);

  return (
    <div className='container'>
      {product && (
        <Wrapper>
          <ImgSec>
            <img
              src={`http://localhost:8000/images/${product.thumbnail}`}
              alt={product.name}
            />
          </ImgSec>
          <InfoSec>
            <Header> {product.name} </Header>
            <PrixSec>
              prix : <b>{product.prix} DH </b>
            </PrixSec>
            <VisitBtn to={`/product/${product.id}`} className='btn'>
              Visit
            </VisitBtn>
          </InfoSec>
        </Wrapper>
      )}
    </div>
  );
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  & div {
    flex: 1;
  }
`;
export const ImgSec = styled.div`
  img {
    max-width: 100%;
  }
`;
export const InfoSec = styled.div`
  padding-left: 2rem;
  text-align: center;
`;
export const Header = styled.h1`
  flex: 1;
  font-size: 30rem;
  margin-bottom: 2rem;
  padding: 4rem auto;
`;
export const PrixSec = styled.h3`
  margin-bottom: 2rem;
`;
export const VisitBtn = styled(Link)`
  margin-bottom: 2rem;
  padding: 0.5rem 3rem;
  background: #1e3d59;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  color: #fcefdf;
  transition: background ease 1s;
  &:hover {
    background-color: #ff6e40;
    color: white;
  }
`;

export default HeroProduct;
