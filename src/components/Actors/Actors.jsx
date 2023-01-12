import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { actorsFilm } from '../../helper/myfetch';

export const Actors = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function actorsOfFilm(id) {
      const res = await actorsFilm(id);
      console.log(res);
      setActors(res.data.cast);
    }
    actorsOfFilm(id);
  }, [id]);

  return (
    <div>
      {actors.length > 0
        ? actors.map(({ id, name }) => <li key={id}>{name}</li>)
        : 'No information'}
    </div>
  );
};
