import { FC, useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoItem from '../../icons/Logo.svg';
import blackLogoItem from '../../icons/LogoItem.svg';
import blackShoping from '../../icons/blackShopingCart.svg';
import favoritesHart from '../../icons/favourites.svg';
import blackFavHeart from '../../icons/blackHeart.svg';
import shoppingBag from '../../icons/shoppingBag.svg';
import moonIcon from '../../icons/moonIcon.svg';
import sunIcon from '../../icons/sunIcon.svg';
import { PageNavLink } from '../PageNavLink';
import classNames from 'classnames';
import { ThemeContext } from '../../context/toggleContext';
import { useLocalStorageContext } from '../../context/StorageContext';
import { SearchLine } from '../SearchLine';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuToggler } from '../MenuToggler';
import { useResizeContext } from '../../context/ResizeContext';

const navList = ['home', 'phones', 'tablets', 'accessories'];

export type Props = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  toggleTheme: () => void;
};

export const Header: FC<Props> = ({ toggleMenu, isMenuOpen, toggleTheme }) => {
  const { theme } = useContext(ThemeContext);
  let logoPath = logoItem;
  let cartPath = shoppingBag;
  let heartPath = favoritesHart;
  let themePath = sunIcon;
  let isLight = false;

  if (theme === 'light') {
    isLight = true;
    themePath = moonIcon;
    logoPath = blackLogoItem;
    cartPath = blackShoping;
    heartPath = blackFavHeart;
  } else {
    isLight = false;
  }

  const { favorites, cartItems } = useLocalStorageContext();

  const location = useLocation();
  const page = location.pathname;

  const { isMobileScreen } = useResizeContext();

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
              <img className="logo__image" src={logoPath} alt="Logo icon" />
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

        {!isMobileScreen ? (
          <div className="header__buying-section">
            <SearchLine
              isOpen={isSearchOpen}
              setIsOpen={setIsSearchOpen}
            />

            <button
              type="button"
              onClick={toggleTheme}
              className={classNames('header__case header__case-button', {
                'header__case-button--moon': isLight,
              })}
            >
              <img src={themePath} alt={theme} />
            </button>

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
                  src={heartPath}
                  className="header__menu-opener_image"
                  alt="menu"
                />
                {favorites.length > 0 && (
                  <span className="header__shoping-bag-count">
                    {favorites.length}
                  </span>
                )}
              </div>
              {page === '/favourites' ? (
                <motion.div
                  className="nav__link-underline"
                  layoutId="underline"
                />
              ) : null}
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
                  src={cartPath}
                  className="header__menu-opener_image"
                  alt="menu"
                />
                {cartItems.length > 0 && (
                  <span className="header__shoping-bag-count">
                    {cartItems.length}
                  </span>
                )}
              </div>
              {page === '/cart' ? (
                <motion.div
                  className="nav__link-underline"
                  layoutId="underline"
                />
              ) : null}
            </NavLink>
          </div>
        ) : (
          <div className="header__menu-container">
            <SearchLine
              isOpen={isSearchOpen}
              setIsOpen={setIsSearchOpen}
            />

            <button
              type="button"
              onClick={toggleTheme}
              className={classNames('header__case header__case-button', {
                'header__case-button--moon': isLight,
              })}
            >
              <img src={themePath} alt={theme} />
            </button>

            <MenuToggler isOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>
        )}
      </div>
    </header>
  );
};
