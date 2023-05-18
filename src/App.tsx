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
import { useContext, useState } from 'react';
import { ItemCard } from './components/ItemCard';
import { ThemeContext } from './context/toggleContext';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <div data-theme={theme}>
      {!isOpen ? (
        <Header
          toggleMenu={toggleMenu}
          toggleTheme={toggleTheme}
        />
      ) : (
        <BurgerMenu toggleMenu={toggleMenu} />
      )}

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
    </div>
  );
};
