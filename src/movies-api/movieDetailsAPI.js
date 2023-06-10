import axios from 'axios';
export function movieDetailsApi(id) {
  const options = { method: 'GET', headers: { accept: 'application/json' } };
  return axios(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=819f545c7c1ea540af1ea0cb7410f83a`,
    options
  );
}
