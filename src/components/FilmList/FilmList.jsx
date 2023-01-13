import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinkFilms = styled(NavLink)`
  color: #66cdaa;
  text-decoration: none;
  display: flex;
  width: 100%;

  :hover:not(.active) {
    color: #2e7d32;
  }
`;

export const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <>
      <h1 style={{ color: '#2e7d32' }}> TOP OF WEEK</h1>
      {films.map(({ original_title, original_name, id }) => (
        <NavLinkFilms
          style={{ height: '30px' }}
          key={id}
          to={`/Film/${id}`}
          state={{ from: location }}
        >
          {original_title ? original_title : original_name}
        </NavLinkFilms>
      ))}
      ;
    </>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};
