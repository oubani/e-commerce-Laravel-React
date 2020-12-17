import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from '../product/ProductItem';
import Loading from '../../components/layouts/Loading';
import Pagination from '../layouts/Pagination/Pagination';
import SearchForm from './searchPageComponents/SearchForm';

const SearchPage = () => {
  //   set categories field
  const [products, setProducts] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // get link api
  const link = process.env.REACT_APP_DOMAIN;

  // get data from link
  var search = window.location.href.split('?')[1].split('=')[1];

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
    getData(body);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get product
  const getData = (body) => {
    axios
      .get(`${link}/search`, { params: body }, null)
      .then((fetchedData) => {
        setProducts(fetchedData.data.products);
        setLoading(false);
      })
      .catch((e) => console.log(e.message));
  };

  const body = {
    minP: 0,
    maxP: 1000000,
    searchP: search,
    categoryP: 0,
    sortedByP: 1,
  };

  const { current_page, last_page } = products;

  return (
    <div style={display} className='container'>
      <h1 style={header}> Searching for " {search} " </h1>

      <SearchForm search={search} categories={categories} getData={getData} />

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

const displayProducts = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
};
export default SearchPage;
