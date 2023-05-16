import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoItem from '../../icons/niceGadgets.svg';
import logoItemOk from '../../icons/Ok.svg';
import menuOpener from '../../icons/Menu.svg';
import favoritesHart from '../../icons/favourites.svg';
import shoppingBag from '../../icons/shoppingBag.svg';
import { PageNavLink } from '../PageNavLink';
import classNames from 'classnames';
import { useLocalStorageContext } from '../../context/StorageContext';

const navList = ['home', 'phones', 'tablets', 'accessories'];

export type Props = {
  toggleMenu: () => void;
};

export const Header: FC<Props> = ({ toggleMenu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const {
    favorites,
    cartItems,
  } = useLocalStorageContext();

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

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__right-side">
          {isMobile ? (
            <NavLink to="/" className="logo">
              <img className="logo__image" src={logoItem} alt="Logo icon" />
              <img className="logo__ok" src={logoItemOk} alt="ok" />
            </NavLink>
          ) : (
            <nav className="header__nav nav" hidden={isMobile}>
              <ul className="nav__panel">
                <li className="nav__item">
                  <NavLink to="/" className="logo">
                    <img
                      className="logo__image"
                      src={logoItem}
                      alt="Logo icon"
                    />
                    <img className="logo__ok" src={logoItemOk} alt="ok" />
                  </NavLink>
                </li>
                {navList.map((item) => (
                  <li key={item} className="nav__item">
                    <PageNavLink to={`/${item}`} text={item} />
                  </li>
                ))}
              </ul>
              <input type="search"
            className="searchInput" placeholder="Search products..." />
            </nav>
          )}
        </div>

        {!isMobile ? (
          <div className="header__buying-section">
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
                <span className="header__shoping-bag-count">
                  {favorites.length}
                </span>
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
          <button
            className="header__menu-button header__case"
            onClick={toggleMenu}
          >
            <img
              className="header__menu-opener_image"
              src={menuOpener}
              alt="menu"
            />
          </button>
        )}
      </div>
    </header>
  );
};
