import React from 'react';
import styled from 'styled-components';

const PageLink = styled.div`
  color: ${({ active }) => (active ? 'white' : 'black')};
  font-size: 1rem;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
  margin-right: 10px;
  background: ${({ active }) => (active ? '#1E3D59' : '#ddd')};
`;

const Pagination = ({ currentPage, lastPage, getData, body, setPage }) => {
  const HandleClickPage = (n) => {
    body.page = n;
    if (setPage) {
      setPage(n);
    }
    if (getData) {
      getData(body);
    }
  };

  let items = [];

  for (let index = 1; index <= lastPage; index++) {
    if (index === currentPage) {
      items.push(
        <PageLink
          key={index}
          active
          aria-disabled
          onClick={() => HandleClickPage(index)}
        >
          {' '}
          {index}{' '}
        </PageLink>
      );
    } else {
      items.push(
        <PageLink key={index} onClick={() => HandleClickPage(index)}>
          {' '}
          {index}{' '}
        </PageLink>
      );
    }
  }

  return <>{items.map((item) => item)}</>;
};

export default Pagination;
