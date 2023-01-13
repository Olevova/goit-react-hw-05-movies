import { reviewsFilm } from '../../helper/myfetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function OfFilm(id) {
      const res = await reviewsFilm(id);
      setReviews(res.data.results);
    }
    OfFilm(id);
  }, [id]);

  return (
    <div>
      {reviews.length > 0
        ? reviews.map(({ id, content }) => (
            <li key={id}>
              <p>{content}</p>
            </li>
          ))
        : 'No information'}
    </div>
  );
};
