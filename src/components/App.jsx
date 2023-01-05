import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<div>HoMe</div>} />
          <Route path="Film" element={<div>FiLm</div>} />
        </Route>
      </Routes>
    </>
  );
};
