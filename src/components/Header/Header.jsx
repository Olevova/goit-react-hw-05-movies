import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import * as React from 'react';
import styled from 'styled-components';

const NavHedear = styled(NavLink)`
  display: inline;
  border-radius: 5px;
  color: white;
  margin: 5px;
  text-decoration: none;
  padding: 5px;

  &.active {
    background-color: #04923d;
  }
  :hover:not(.active) {
    background-color: #3cb371;
  }
`;

const menu = [
  {
    href: '/',
    tex: 'HOME',
  },
  {
    href: 'Film',
    tex: 'FILM',
  },
];

export const Header = () => {
  return (
    <Box sx={{ bgcolor: '#136b4d', height: '100%', padding: 1 }}>
      {menu.map(({ href, tex }) => (
        <NavHedear to={href} key={tex}>
          {tex}
        </NavHedear>
      ))}
    </Box>
  );
};
