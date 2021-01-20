import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/layouts/Loading';
import Pagination from '../layouts/Pagination/Pagination';
import SearchForm from './searchPageComponents/SearchForm';
import SearchResults from './searchPageComponents/SearchResults';

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
    setLoading(true);
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
    page: 1,
  };

  const { current_page, last_page } = products;

  return (
    <div style={display} className='container'>
      <h1 style={header}> Searching for " {search} " </h1>

      <SearchForm search={search} categories={categories} getData={getData} />

      {loading && <Loading />}
      {products.data !== undefined && !loading ? (
        <div>
          <p style={{ marginBottom: '15px' }}>
            {' '}
            total products found :{products.total}
          </p>
          <SearchResults products={products.data} />
          <div className='pagination' style={{ marginTop: '15px' }}>
            {products.total > 3 && (
              <Pagination
                currentPage={current_page}
                lastPage={last_page}
                getData={getData}
                body={body}
              />
            )}
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
  marginBottom: '4rem',
};

const header = {
  color: '#4A637A',
  margin: '1.5rem auto',
};

export default SearchPage;
