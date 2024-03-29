import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { checkAdmin } from '../../../../actions/authAction';

export const SideNav = () => {
  const pageName = window.location.pathname.split('/').pop();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(checkAdmin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById('navbar').style.padding = '30px 10px';
      document.getElementById('logo').style.fontSize = '25px';
    } else {
      document.getElementById('navbar').style.padding = '80px 10px';
      document.getElementById('logo').style.fontSize = '35px';
    }
  };

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
            <NavLink
              to='/productsListe'
              active={pageName === 'productsListe' ? true : false}
            >
              Products Liste
            </NavLink>
            <NavLink
              to='/usersListe'
              active={pageName === 'usersListe' ? true : false}
            >
              Users Liste
            </NavLink>
            <NavLink
              to='/addProduct'
              active={pageName === 'addProduct' ? true : false}
            >
              Add Product
            </NavLink>
            {/* <NavLink
              to='/promotions'
              active={pageName === 'promotions' ? true : false}
            >
              Promotions
            </NavLink> */}
            {!isAdmin ? (
              <NavLink
                to='/myOrders'
                active={pageName === 'myOrders' ? true : false}
              >
                My Orders
              </NavLink>
            ) : (
              ''
            )}
            {!isAdmin ? (
              <NavLink
                to='/favorites'
                active={pageName === 'favorites' ? true : false}
              >
                Favorites
              </NavLink>
            ) : (
              ''
            )}
            <NavLink to='/orders' active={pageName === 'orders' ? true : false}>
              Orders
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
  height: 100%;
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
