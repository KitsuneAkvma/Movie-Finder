import React from 'react';
import { StyledNavbar } from './Navbar.styled';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <StyledNavbar>
      {' '}
      <li className='navigation__item'>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className='navigation__item'>
        <NavLink to="/movies/">Movies</NavLink>
      </li>
    </StyledNavbar>
  );
}
