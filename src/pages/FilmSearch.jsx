import { useState, useEffect } from 'react';
import { filmSearchReq } from 'helper/myfetch';
import Container from '@mui/material/Container';
import * as React from 'react';
import { Form } from '../components/Form/Form';
import { FilmList } from 'components/FilmList/FilmList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';

export const FilmSearch = () => {
  const [searchFilm, setSearch] = useSearchParams('');
  const [filmSearch, setFilmsearch] = useState([]);
  const filmsForSearch = searchFilm.get('findfilm') ?? '';

  const onSubmit = search => {
    setSearch(search !== '' ? { findfilm: search } : {});
  };

  useEffect(() => {
    async function filmList() {
      const filmsSearchArray = await filmSearchReq(filmsForSearch).then(
        data => data.data.results
      );
      console.log(filmsSearchArray, 15, filmsForSearch, searchFilm);
      if (filmsSearchArray.length < 2) {
        return toast('Фільму з такою назвою не знайдено', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
      setFilmsearch(filmsSearchArray);
    }
    if (filmsForSearch !== '') {
      filmList();
      return;
    }

    setFilmsearch([]);
  }, [searchFilm, filmsForSearch]);

  return (
    <>
      <Form onSubmit={onSubmit} />

      <Container
        maxWidth="lg"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {filmSearch.length > 0 ? (
          <FilmList films={filmSearch} />
        ) : (
          <h3 style={{ color: '#3cb371', display: 'block', padding: 0 }}>
            Insert Film Name{' '}
          </h3>
        )}
      </Container>
    </>
  );
};
