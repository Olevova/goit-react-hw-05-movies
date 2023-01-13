import Container from '@mui/material/Container';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Img from '../../image/flag.jpg';
import css from './Film.module.css';

export const Film = ({ film }) => {
  const {
    original_title,
    original_name,
    overview,
    poster_path,
    vote_average,
    genres,
  } = film;
  const location = useLocation();

  const dataGenres = genres
    ? genres.map(({ name }) => name).join(', ')
    : 'No information';

  console.log(location);

  return (
    <Container
      maxWidth="lg"
      style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}
    >
      <NavLink className={css.liFilm} to={location.state?.from ?? '/Film'}>
        Back
      </NavLink>
      <Card sx={{ maxWidth: 345, maxHeight: 700 }}>
        <CardMedia
          sx={{ height: 400 }}
          image={
            poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : Img
          }
          title={original_title === '' ? original_title : original_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {original_title === '' ? original_title : original_name}
          </Typography>
          <Typography variant="h6" color="text.primary">
            User Score: {vote_average}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Overview
            {overview}
          </Typography>
          <Typography variant="h7" color="text.primary">
            Geners : {dataGenres}
          </Typography>
        </CardContent>
      </Card>
      <ul>
        <li className={css.liFilm}>
          <NavLink to="cast"> Cast</NavLink>
        </li>
        <li className={css.liFilm}>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </Container>
  );
};

Film.propTypes = {
  film: PropTypes.any.isRequired,
};
