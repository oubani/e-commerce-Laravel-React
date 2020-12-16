import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from '../product/ProductItem';
import Loading from '../../components/layouts/Loading';
import { Link } from 'react-router-dom';
import Pagination from '../layouts/Pagination/Pagination';

const SearchPage = () => {
  //   set categories field
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  const [category, setCategory] = useState(0);
  const [sort, setSort] = useState(1);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1000000);
  const [loading, setLoading] = useState(false);
  const link = process.env.REACT_APP_DOMAIN;
  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  // get data from link
  var search = window.location.href.split('?')[1].split('=')[1];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`${link}/search`, { params: body }, null)
      .then((fetchedData) => {
        setProducts(fetchedData.data.products);
        setLoading(false);
      })
      .catch((e) => console.log(e.message));

    console.log('submited');
  };

  const handleSelectChange = (e) => setCategory(e.target.value);

  useEffect(() => {
    // get categories
    setLoading(true);
    axios
      .get(`${link}/category`)
      .then((fetchedData) => {
        setCategories(fetchedData.data.categories);
        setLoading(false);
      })
      .catch((e) => {
        console.log('error' + e);
      });
    // fetch for first time
    axios
      .get(`${link}/search`, { params: body }, null)
      .then((fetchedData) => setProducts(fetchedData.data.products))
      .catch((e) => console.log(e.message));
  }, []);

  const body = {
    minP: min,
    maxP: max,
    searchP: search,
    categoryP: category,
    sortedByP: sort,
  };

  const { current_page, last_page } = products;

  return (
    <div style={display} className='container'>
      <h1 style={header}> Searching for " {search} " </h1>
      <form style={inlineForm} onSubmit={handleSubmit}>
        <div style={formGroup}>
          <label htmlFor='mini'>Min : </label>
          <input
            type='number'
            name='min'
            value={min}
            min={1}
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
            min={100}
            width='500px'
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
        <input type='submit' value='Search' style={submitBtn} />
      </form>

      {loading && <Loading />}

      {products.data !== undefined && !loading ? (
        <div>
          <p> total products found :{products.total}</p>
          <div style={displayProducts}>
            {products.data.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
          <div className='pagination'>
            <Pagination currentPage={current_page} lastPage={last_page} />
          </div>
        </div>
      ) : (
        ''
      )}
      {products.length === 0 && !loading && <p>there is no products</p>}
    </div>
  );
};

// styles
const display = {
  width: '700px',
  maxWidth: '100%',
};

const header = {
  color: '#4A637A',
  margin: '1.5rem auto',
};

const inlineForm = {
  backgroundColor: '#add8e6',
  padding: '1rem 10px',
  marginBottom: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const inputNumber = {
  maxWidth: '50px',
};
const formGroup = {
  marginRight: '1.2rem',
};

const submitBtn = {
  color: 'white',
  padding: '0.5rem 1rem',
  backgroundColor: '#1E3D59',
  border: 'none',
};

const displayProducts = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
};
export default SearchPage;
