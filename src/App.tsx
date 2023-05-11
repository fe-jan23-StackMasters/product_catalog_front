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
// import { HomeSlider } from './components/Slider/Slider';
import { PhoneCard } from './types/PhoneCard';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useState<PhoneCard[]>([]);
  const [cart, setCart] = useState<PhoneCard[]>([]);

  // const handleAddToFavorites = (item: PhoneCard) => {
  //   const newFavorites = [...favorites, item];

  //   setFavorites(newFavorites);
  //   localStorage.setItem('favorites', JSON.stringify(newFavorites));
  // };

  // const handleAddToCart = (item: PhoneCard) => {
  //   const newCart = [...cart, item];

  //   setCart(newCart);
  //   localStorage.setItem('cart', JSON.stringify(newCart));
  // };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll');
    setFavorites([]);
    setCart([]);
  };

  return (
    <>
    <body>
      {!isOpen ? (
        <Header
        toggleMenu={toggleMenu}
        favorites={favorites}
        cart={cart}
        />
      ) : (
        <BurgerMenu toggleMenu={toggleMenu}/>
      )}

      <main className="container">
        <Routes>
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
    </body>
    </>
  );
};
