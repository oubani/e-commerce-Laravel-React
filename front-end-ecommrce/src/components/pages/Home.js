import React from 'react';
import NewProducts from './homePage/NewProducts';
import MostOrderd from './homePage/MostOrderd';
import HighPromoted from './homePage/HighPromoted';

const Home = () => {
  return (
    <div>
      <NewProducts />
      <MostOrderd />
      <HighPromoted />
    </div>
  );
};

export default Home;
