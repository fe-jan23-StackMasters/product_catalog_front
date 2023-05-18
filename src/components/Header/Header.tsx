import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../icons/Logo.svg';
import favoritesHart from '../../icons/favourites.svg';
import shoppingBag from '../../icons/shoppingBag.svg';
import { PageNavLink } from '../PageNavLink';
import classNames from 'classnames';
import { useLocalStorageContext } from '../../context/StorageContext';
import { SearchLine } from '../SearchLine';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuToggler } from '../MenuToggler';

const navList = ['home', 'phones', 'tablets', 'accessories'];

export type Props = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

export const Header: FC<Props> = ({ toggleMenu, isMenuOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const { favorites, cartItems } = useLocalStorageContext();

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      setIsMobile(windowWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const windowSize = window.innerWidth;
  const isLogoHidden = windowSize < 420 && isSearchOpen;
  const isNavbarHidden = windowSize < 810 && isSearchOpen;

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left-side">
          {!isLogoHidden && (
            <NavLink to="/" className="logo">
              <img className="logo__image" src={logo} alt="Logo icon" />
            </NavLink>
          )}
          <AnimatePresence>
            {!isNavbarHidden && (
              <motion.nav
                className="header__nav nav"
                initial={{
                  opacity: 0,
                  position: 'absolute',
                  transform: 'translateX(-50px)',
                }}
                animate={{
                  opacity: 1,
                  position: 'relative',
                  transform: 'translateX(0)',
                }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <ul className="nav__panel">
                  {navList.map((item) => (
                    <li key={item} className="nav__item">
                      <PageNavLink to={`/${item}`} text={item} />
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {!isMobile ? (
          <div className="header__buying-section">
            <SearchLine
              isOpen={isSearchOpen}
              setIsOpen={setIsSearchOpen}
            />
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                classNames('header__case', {
                  'header__case--is-active': isActive,
                })
              }
            >
              <div className="header__count-position">
                <img
                  src={favoritesHart}
                  className="header__menu-opener_image"
                  alt="menu"
                />
                {favorites.length > 0 && (
                  <span className="header__shoping-bag-count">
                    {favorites.length}
                  </span>
                )}
              </div>
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                classNames('header__case', {
                  'header__case--is-active': isActive,
                })
              }
            >
              <div className="header__count-position">
                <img
                  src={shoppingBag}
                  className="header__menu-opener_image"
                  alt="menu"
                />
                {cartItems.length > 0 && (
                  <span className="header__shoping-bag-count">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </NavLink>
          </div>
        ) : (
          <div className="header__menu-container">
            <SearchLine
              isOpen={isSearchOpen}
              setIsOpen={setIsSearchOpen}
            />
            <MenuToggler isOpen={isMenuOpen} onToggle={toggleMenu}/>
          </div>
        )}
      </div>
    </header>
  );
};
