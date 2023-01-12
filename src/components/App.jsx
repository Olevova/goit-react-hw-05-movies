import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout ';
import { Films } from 'pages/Films';
import { FilmSearch } from 'pages/FilmSearch';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import * as React from 'react';
import { Actors } from './Actors/actors';
import { Reviews } from './Reviews/Reviews';

const MovieDetail = lazy(() =>
  import('../pages/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetail,
  }))
);

export const App = () => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Films />} />
              <Route path="Film" element={<FilmSearch />} />
              <Route path="Film/:id" element={<MovieDetail />}>
                <Route
                  path="cast"
                  element={
                    <div>
                      <Actors />
                    </div>
                  }
                />
                <Route
                  path="reviews"
                  element={
                    <div>
                      <Reviews />
                    </div>
                  }
                />
              </Route>
            </Route>
            <Route path="*" element={<SharedLayout />} />
          </Routes>
        </Container>
      </React.Fragment>
    </>
  );
};
