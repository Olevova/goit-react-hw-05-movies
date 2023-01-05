import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
