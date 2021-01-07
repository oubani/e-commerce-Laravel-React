import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

export const SideNav = ({ isAdmin }) => {
  return (
    <>
      <div style={{ flex: '1' }}>
        <SideNavContainer>
          <NavMenu>
            <NavLink to='/dashboard'> dashboard </NavLink>
            <NavLink to='/a'> Product List </NavLink>
            <NavLink to='/a'> Add Product</NavLink>
            <NavLink to='/a'> Promotions </NavLink>
            {!isAdmin ? <NavLink to='/a'> My Orders </NavLink> : ''}
            {!isAdmin ? <NavLink to='/a'> Favorites </NavLink> : ''}
            {/* {!isAdmin ? <NavLink to='/a'> My Orders </NavLink> : ''} */}
            <NavLink to='/a'> Edit Order </NavLink>
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
  &:hover {
    background: #053365;
  }
`;
