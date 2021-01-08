import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';

export const SideNav = ({ isAdmin }) => {
  const pageName = window.location.pathname.split('/').pop();
  return (
    <>
      <div style={{ flex: '1' }}>
        <SideNavContainer>
          <NavMenu>
            <NavLink
              to='/dashboard'
              active={pageName === 'dashboard' ? true : false}
            >
              Dashboard
            </NavLink>
            <NavLink to='/a' active={pageName === 'a' ? true : false}>
              Product List
            </NavLink>
            <NavLink
              to='/addProduct'
              active={pageName === 'addProduct' ? true : false}
            >
              {' '}
              Add Product
            </NavLink>
            <NavLink to='/a' active={pageName === 'promotions' ? true : false}>
              {' '}
              Promotions{' '}
            </NavLink>
            {!isAdmin ? (
              <NavLink to='/myOrders' active={pageName === 'a' ? true : false}>
                {' '}
                My Orders{' '}
              </NavLink>
            ) : (
              ''
            )}
            {!isAdmin ? (
              <NavLink to='/favorites' active={pageName === 'a' ? true : false}>
                {' '}
                Favorites{' '}
              </NavLink>
            ) : (
              ''
            )}
            <NavLink to='/a' active={pageName === 'editOrders' ? true : false}>
              {' '}
              Edit Order{' '}
            </NavLink>
            {/* {!isAdmin ? <NavLink to='/' active={pageName === 'a' ? true : false} > My Orders </NavLink> : ''} */}
          </NavMenu>
        </SideNavContainer>
      </div>
    </>
  );
};

export const SideNavContainer = styled.div`
  width: 100%;
  height: 83.5vh;
  background: var(--main-blue-color);
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 15px 30px;
  color: #fff;
  font-size: 1.2rem;
  transition: background 0.25s;
  background: ${({ active }) => (active ? '#053390' : '')};
  ${({ active }) => (active ? 'border-right:  15px solid #1167b1 ' : ' ')};
  &:hover {
    background: #053365;
  }
`;
