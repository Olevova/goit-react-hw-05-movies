import { filmResp } from 'helper/myfetch';
import { FilmList } from 'components/FilmList/FilmList';
import { useState } from 'react';
import { useEffect } from 'react';
import Container from '@mui/material/Container';
import * as React from 'react';
// import { Outlet } from 'react-router-dom';

export const Films = () => {
  const [film, setFilm] = useState([]);

  async function Day() {
    const films = await filmResp().then(data => data.data.results);
    setFilm(films);
  }

  useEffect(() => {
    Day();
  }, []);

  return (
    <>
      <Container
        maxWidth="lg"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <FilmList films={film} />
      </Container>
      {/* <Outlet /> */}
    </>
  );
};
