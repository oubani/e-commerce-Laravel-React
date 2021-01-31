import React from 'react';
import axios from 'axios';

const Testing = () => {
  const handleClick = async () => {
    console.log('clicked');
    await axios.delete(`http://localhost:8000/api/carts/aze132`, {
      row_id: 'azdaz541',
      // 'product_id':''
      // 'quantity':''
    });
  };

  return (
    <div>
      <button onClick={handleClick}> delete </button>
    </div>
  );
};

export default Testing;
