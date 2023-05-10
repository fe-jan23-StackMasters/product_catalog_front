import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';

import { PageNotFound } from './components/PageNotFound';
import { HomePage } from './components/HomePage';
import { PhonesPage } from './components/PhonesPage';
import { TabletsPage } from './components/TabletsPage';
import { AccessoriesPage } from './components/AccessoriesPage';
import { FavouritesPage } from './components/FavouritesPage';
import { ShoppingBasket } from './components/ShoppingBasket';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeSlider } from './components/Slider/Slider';

export const App = () => {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
        <Route path="/" element={
          <HomeSlider NameSlider = {'Brand new models'} />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/phones" element={<Outlet />}>
            <Route index element={<PhonesPage />} />
            <Route path=":itemCard" element={<PhonesPage />} />
          </Route>

          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/favorites" element={<FavouritesPage />} />
          <Route path="/basket" element={<ShoppingBasket />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};
