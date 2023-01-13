import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { oneFilm } from 'helper/myfetch';
import { Film } from '../components/Film/Film';
import styled from 'styled-components';

const AllFilmDiv = styled('div')`
  // display: flex;
  background-color: rgba(156, 219, 158, 0.5);
  // flex-direction: column-reverse;
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
`;

export const MovieDetail = () => {
  const { id } = useParams();
  const [one, setOne] = useState([]);

  useEffect(() => {
    async function film(id) {
      const res = await oneFilm(id);
      console.log(res.data, id);
      setOne(res.data);
    }
    film(id);
  }, [id]);

  return (
    <AllFilmDiv>
      <Film film={one} />
      <Outlet />
    </AllFilmDiv>
  );
};
