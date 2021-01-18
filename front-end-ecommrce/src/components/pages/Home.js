import React from 'react';
import NewProducts from './homePage/NewProducts';
import MostOrderd from './homePage/MostOrderd';
import HighPromoted from './homePage/HighPromoted';
import HeroProduct from './homePage/HeroProduct';

const Home = () => {
  return (
    <div>
      <HeroProduct />
      <NewProducts />
      <MostOrderd />
      <HighPromoted />
    </div>
  );
};

export default Home;
