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
import { SearchLine } from '../SearchLine';

const navList = ['home', 'phones', 'tablets', 'accessories'];

export type Props = {
  toggleMenu: () => void;
};

export const Header: FC<Props> = ({ toggleMenu }) => {
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

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInput = () => {
    setIsOpen(true);
  };

  const windowSize = window.innerWidth;

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__right-side">
          {((windowSize > 420 && windowSize < 828) && isOpen) && (
            <NavLink to="/" className="logo">
              <img className="logo__image" src={logoItem} alt="Logo icon" />
              <img className="logo__ok" src={logoItemOk} alt="ok" />
            </NavLink>
          )}

          {(!(windowSize < 828) || !isOpen) && (
            <>
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
                </nav>
              )}
            </>
          )}
        </div>

        {!isMobile ? (
          <div className="header__buying-section">
            <SearchLine
              isOpen={isOpen}
              handleOpenInput={handleOpenInput}
              setIsOpen={setIsOpen}
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
              isOpen={isOpen}
              handleOpenInput={handleOpenInput}
              setIsOpen={setIsOpen}
            />
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
          </div>
        )}
      </div>
    </header>
  );
};
