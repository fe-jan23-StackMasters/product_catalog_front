import React, { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';

import { PageNotFound } from './components/PageNotFound';
import { HomePage } from './components/HomePage';
import { PhonesPage } from './components/PhonesPage';
import { TabletsPage } from './components/TabletsPage';
import { AccessoriesPage } from './components/AccessoriesPage';
import { FavouritesPage } from './components/FavouritesPage';
import { CartPage } from './components/CartPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BurgerMenu } from './components/BurgerMenu';
import { useState } from 'react';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen ? (
        <Header toggleMenu={toggleMenu}/>
      ) : (
        <BurgerMenu toggleMenu={toggleMenu}/>
      )}

      <main className='container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/phones" element={<Outlet />}>
            <Route index element={<PhonesPage />} />
            <Route path=":itemCard" element={<PhonesPage />} />
          </Route>

          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};
