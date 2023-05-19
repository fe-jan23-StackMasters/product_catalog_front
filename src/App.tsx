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
import { useCallback, useContext, useState } from 'react';
import { ItemCard } from './components/ItemCard';
import { ThemeContext } from './context/toggleContext';
import { SearchPage } from './components/SearchPage';
import { AnimatePresence } from 'framer-motion';
import { ProductType } from './types/ProductType';
import { DynamickBackToTopBtn } from
  './components/DynamickBackToTopBtn/DynamickBackToTopBtn';
import classNames from 'classnames';
import { Contacts } from './components/Contacts';

const categories = Object.values(ProductType);

export const App = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
  };

  const toggleMenu = useCallback((status?: boolean) => {
    setIsBurgerOpen((prev) => status ?? !prev);
  }, []);

  return (
    <div data-theme={theme}>
      <DynamickBackToTopBtn />
      <Header
        toggleMenu={toggleMenu}
        toggleTheme={toggleTheme}
        isMenuOpen={isBurgerOpen}
      />
      <AnimatePresence>
        {isBurgerOpen && <BurgerMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>

      <main className={classNames('main', { 'main--menu-open': isBurgerOpen })}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          {categories.map((category) => (
            <Route path={category} key={category} element={<Outlet />}>
              <Route index element={<PhonesPage productType={category} />} />
              <Route path=":itemCard" element={<ItemCard />} />
            </Route>
          ))}

          <Route path="/contacts" element={<Contacts />} />
          <Route path="/search" element={<SearchPage />} />
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
