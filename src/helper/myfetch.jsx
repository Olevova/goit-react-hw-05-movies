import axios from 'axios';

export async function filmResp() {
  try {
    const resFilm = await axios(
      `https://api.themoviedb.org/3/trending/all/day?api_key=f68134e3023166cb9cb0f095aa9e1cfe`
    );
    console.log(resFilm);
    return resFilm;
  } catch (error) {
    console.log(error);
  }
}

export async function filmSearchReq(film) {
  try {
    const filmReq = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=f68134e3023166cb9cb0f095aa9e1cfe&language=en-US&page=1&include_adult=false&query=${film}
`
    );
    return filmReq;
  } catch (error) {
    console.log(error);
  }
}

export async function oneFilm(id) {
  const oneFilm = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f68134e3023166cb9cb0f095aa9e1cfe&language=en-US`
  );
  return oneFilm;
}
export async function actorsFilm(id) {
  const actors = await axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f68134e3023166cb9cb0f095aa9e1cfe&language=en-US`
  );
  console.log(actors);
  return actors;
}

export async function reviewsFilm(id) {
  const actors = await axios(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f68134e3023166cb9cb0f095aa9e1cfe&language=en-US`
  );
  console.log(actors);
  return actors;
}
