import React from 'react';
import styled from 'styled-components';

const PageLink = styled.div`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
  margin-right: 10px;
  background: ${({ active }) => (active ? '#4b59f7' : '#ddd')};
`;

const Pagination = ({ currentPage, lastPage }) => {
  console.log({ currentPage, lastPage });
  const HandleClickPage = (e, p1, p2) => {};

  let items = [];

  for (let index = 1; index <= lastPage; index++) {
    if (index === currentPage) {
      items.push(
        <PageLink
          key={index}
          active
          onClick={(e) => HandleClickPage(e, '1', '2')}
        >
          {' '}
          {index}{' '}
        </PageLink>
      );
    } else {
      items.push(
        <PageLink key={index} onClick={(e) => HandleClickPage(e, '1', '2')}>
          {' '}
          {index}{' '}
        </PageLink>
      );
    }
  }

  return <>{items.map((item) => item)}</>;
};

export default Pagination;
