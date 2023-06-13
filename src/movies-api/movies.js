import axios from 'axios';

const options = { method: 'GET', headers: { accept: 'application/json' } };
export function getDate() {
  return axios(
    'https://api.themoviedb.org/3/trending/all/day?api_key=819f545c7c1ea540af1ea0cb7410f83a',
    options
  );
}

export function movieDetailsApi(id) {
  return axios(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=819f545c7c1ea540af1ea0cb7410f83a`,
    options
  );
}

export function searchMovie(query) {
  return axios(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=819f545c7c1ea540af1ea0cb7410f83a`,
    options
  );
}
