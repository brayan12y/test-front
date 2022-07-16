import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';
import CountriesDetails from './pages/CountriesDetails/CountriesDetails';
import CountriesHome from './pages/CountriesHome/CountriesHome';

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<CountriesHome />} />
        <Route
          path='countries-details/:teamId'
          element={<CountriesDetails />}
        />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Fragment>
  );
};
