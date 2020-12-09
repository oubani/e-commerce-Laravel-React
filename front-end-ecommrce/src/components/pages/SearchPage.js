import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from '../product/ProductItem';
import Loading from '../../components/layouts/Loading';

const SearchPage = () => {
  //   set categories field
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(0);
  const [sort, setSort] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);
  const [loading, setLoading] = useState(false);

  // get data from link
  var newtable = window.location.href.split('?');
  const search = newtable[1].split('=')[1];

  const handleSubmit = (e) => {
    // submittde
    e.preventDefault();
    axios
      .post(`${link}/search`, body, null)
      .then((fetchedData) => setProducts(fetchedData.data.products))
      .catch((e) => console.log(e.message));
    console.log('submited');
  };

  const handleSelectChange = (e) => setCategory(e.target.value);

  const link = process.env.REACT_APP_DOMAIN;

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  useEffect(() => {
    // get categories
    axios
      .get(`${link}/category`)
      .then((fetchedData) => {
        setCategories(fetchedData.data.categories);
      })
      .catch((e) => {
        console.log('error' + e);
      });
    // fetch for first time
    axios
      .post(`${link}/search`, body, null)
      .then((fetchedData) => setProducts(fetchedData.data.products))
      .catch((e) => console.log(e.message));
  }, []);

  const body = {
    searchP: search,
    categoryP: category,
    minP: min,
    maxP: max,
    sortedByP: sort,
  };

  return (
    <div style={display} className='container'>
      <h1> Searching for " {search} " </h1>
      <form style={inlineForm} onSubmit={handleSubmit}>
        <div style={formGroup}>
          <label htmlFor='mini'>Min : </label>
          <input
            type='number'
            name='min'
            value={min}
            onChange={(e) => setMin(e.target.value)}
            style={inputNumber}
          />
        </div>
        <div style={formGroup}>
          <label htmlFor='max'>Max : </label>
          <input
            type='number'
            name='max'
            value={max}
            onChange={(e) => setMax(e.target.value)}
            style={inputNumber}
          />
        </div>
        <div style={formGroup}>
          <label htmlFor='mini'> Category : </label>
          <select name='category' onChange={handleSelectChange} id='category'>
            <option value='none'>All</option>
            {categories.length > 0 &&
              categories.map((category) => (
                <option key={category.id} defaultValue value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <div style={formGroup}>
          <label htmlFor='mini'> Sort By </label>
          <select
            name='SortBy'
            id='SortBy'
            onChange={(e) => setSort(e.target.value)}
          >
            <option value={1}>Shipper</option>
            <option value={2}>high </option>
          </select>
        </div>
        <input type='submit' value='Search' />
      </form>

      <div>{category} </div>
      <div style={displayProducts}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

// styles
const display = {
  width: '700px',
  maxWidth: '100%',
};
const inlineForm = {
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const inputNumber = {
  maxWidth: '50px',
};
const formGroup = {
  marginRight: '1.2rem',
};

const displayProducts = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
};
export default SearchPage;
