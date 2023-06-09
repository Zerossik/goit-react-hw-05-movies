import { useEffect, useState } from 'react';
import { getDate } from 'movies-api/movies';

const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    console.log('выполнился эффект');
    getDate()
      .then(({ data: { results } }) => console.log(results))
      .catch(err => console.log(err));
  });
  console.log(data);
  return <h2>Hello World </h2>;
};

export default Home;
