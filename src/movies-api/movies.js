import axios from 'axios';

const options = { method: 'GET', headers: { accept: 'application/json' } };
export function getDate() {
  return axios(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=819f545c7c1ea540af1ea0cb7410f83a',
    options
  );
}