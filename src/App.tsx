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
import { BurgerMenu } from './components/BurgerMenu';
import { useState } from 'react';
import { ItemCard } from './components/ItemCard';
import { AnimatePresence } from 'framer-motion';

export const App = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);

    setTimeout(
      () => {
        document.body.classList.toggle('no-scroll');
      },
      !isBurgerOpen ? 300 : 0,
    );
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} isMenuOpen={isBurgerOpen}/>
      <AnimatePresence>
        {isBurgerOpen && <BurgerMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/phones" element={<Outlet />}>
            <Route index element={<PhonesPage />} />
            <Route path=":itemCard" element={<ItemCard />} />
          </Route>

          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/cart" element={<ShoppingBasket />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};
