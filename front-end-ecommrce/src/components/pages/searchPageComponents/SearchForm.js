import React, { useState } from 'react';

const SearchForm = ({ search, categories, getData }) => {
  // state

  const [category, setCategory] = useState(0);
  const [sort, setSort] = useState(1);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1000000);

  //   handle submit

  const body = {
    minP: min,
    maxP: max,
    searchP: search,
    categoryP: category,
    sortedByP: sort,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getData(body);
  };

  const handleSelectChange = (e) => setCategory(e.target.value);

  return (
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
  );
};

// styles

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

export default SearchForm;
