import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchPage = () => {
  var newtable = window.location.href.split('?');
  //   const categorysubmited = newtable[0].split('=')[1];
  const search = newtable[1].split('=')[1];

  const handleSubmit = () => {};

  const link = process.env.REACT_APP_DOMAIN;

  //   set categories field
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await axios.get(`${link}/search`, {
        min: 500,
        max: 9000,
        category: 1,
      });
      return fetchedCategories;
    };
    // const fetchedCategories = fetchCategories();

    setCategories([
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Phone' },
      { id: 3, name: 'Camera' },
    ]);
    // setCategories(fetchedCategories);
  }, []);

  return (
    <div style={display} className='container'>
      <h1> Searching for " {search} " </h1>
      <form style={inlineForm} onSubmit={handleSubmit}>
        <div style={formGroup}>
          <label htmlFor='mini'>Min : </label>
          <input type='number' name='min' style={inputNumber} />
        </div>
        <div style={formGroup}>
          <label htmlFor='mini'>Max : </label>
          <input type='number' name='max' style={inputNumber} />
        </div>
        <select name='category' id='category'>
          <option value='none'>All</option>
          {categories.length > 0 &&
            categories.map((category) => (
              <option key={category.id} defaultValue value={category.id}>
                {category.name}{' '}
              </option>
            ))}
        </select>
        <input type='submit' value='Search' />
      </form>
      <div></div>
    </div>
  );
};

// styles
const display = {
  width: '700px',
  maxWidth: '100%',
};
const inlineForm = {
  padding: '1rem 2rem',
  display: 'flex',
};
const inputNumber = {
  width: '40px',
};
const formGroup = {
  marginRight: '1rem',
};
export default SearchPage;
