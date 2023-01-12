import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { oneFilm } from 'helper/myfetch';
import { Film } from '../components/Film/Film';

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
    <>
      <Outlet />
      <Film film={one} />
    </>
  );
};
