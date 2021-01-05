import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

export const SideNav = ({ isAdmin }) => {
  return (
    <>
      <div>
        <p>Side Bar</p>
        <FaIcons.FaBars />
      </div>
    </>
  );
};
