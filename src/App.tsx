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
import { Querypage } from './components/QeuryPage';

import { ProductType } from './types/ProductType';

const categories = Object.values(ProductType);

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <>
      {!isOpen ? (
        <Header toggleMenu={toggleMenu} />
      ) : (
        <BurgerMenu toggleMenu={toggleMenu} />
      )}

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          {categories.map(category => (
            <Route path={category} key={category} element={<Outlet />}>
              <Route index element={<PhonesPage
                productType={category}/>} />
              <Route path=":itemCard" element={<ItemCard />} />
            </Route>
          ))}

          <Route path="/search" element={<Querypage />} />
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
