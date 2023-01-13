import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { actorsFilm } from '../../helper/myfetch';
import css from './Actors.module.css';

export const Actors = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function actorsOfFilm(id) {
      const res = await actorsFilm(id);
      setActors(res.data.cast);
    }
    actorsOfFilm(id);
  }, [id]);

  return (
    <div>
      <h3 style={{ display: 'block' }}>Actor Information</h3>
      <div className={css.liDiv}>
        {actors.length > 0 ? (
          actors.map(({ id, name, profile_path }) => {
            if (profile_path) {
              return (
                <li key={id} className={css.liBlock}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={`Actor: ${name}`}
                    width={50}
                  />
                  <p>{name}</p>
                </li>
              );
            }
            return null;
          })
        ) : (
          <p> 'No information'</p>
        )}
      </div>
    </div>
  );
};
