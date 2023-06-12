import { movieDetailsApi } from '../movies-api/movies';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

export const MovieDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log('Выполнен Эффект');
    movieDetailsApi(id)
      .then(({ data }) => console.log(data))
      .catch(() => new Error('Ошибка ответа от сервера'));
  }, [id]);
  return (
    <>
      <Button text={'Go Back'} onClick={() => console.log('Клик')} />
      <h2>Тут будет компонент С инфой про фильм</h2>
      <AdditionalInfo />
      <Outlet />
    </>
  );
};
