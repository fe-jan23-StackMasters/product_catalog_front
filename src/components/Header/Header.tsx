import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoItem from '../../icons/niceGadgets.svg';
import logoItemOk from '../../icons/Ok.svg';
import menuOpener from '../../icons/Menu.svg';
import favoritesRed from '../../icons/faqvoritesFilled.svg';
import favorites from '../../icons/favourites.svg';
import shoppingBag from '../../icons/shoppingBag.svg';
import { PageNavLink } from '../PageNavLink';

const navList = ['home', 'phones', 'tablets', 'accessories'];

export type Props = {
  toggleMenu: () => void;
};

export const Header: FC<Props> = ({ toggleMenu }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasFavorites, setHasFavorites] = useState(false);
  const [expectToBuy, setExpectToBuy] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      setIsMobile(windowWidth < 640);
      setHasFavorites(true);
      setExpectToBuy((prev) => prev + 1);
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
          {isMobile && (
            <Link to="/" className="logo">
              <img
                className="logo__image"
                src={logoItem} alt="Logo icon"
              />
              <img className="logo__ok" src={logoItemOk} alt="ok" />
            </Link>
          )}

          {!isMobile && (
            <nav className="header__nav nav">
              <ul className="nav__panel">
                <li className='nav__item'>
                  <Link to="/" className="logo">
                    <img
                      className="logo__image"
                      src={logoItem}
                      alt="Logo icon"
                    />
                    <img className="logo__ok" src={logoItemOk} alt="ok" />
                  </Link>
                </li>
                {navList.map((item) => (
                  <li key={item} className="nav__item">
                    <PageNavLink to={`/${item}`} text={item} />
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

          {!isMobile ? (
            <div className="header__buying-section">

              <a href='/favourites' className="header__case">
              {hasFavorites ? (
                <>
                <div className="header__count-position">

                  <img src={favoritesRed}
                    className="header__menu-opener_image" alt="menu"
                    />
                    <span className='header__shoping-bag-count'>
                      13
                    </span>
                </div>
                </>
              ) : (
                <img src={favorites}
                className="header__menu-opener_image" alt="menu"
                />
              )}
              </a>

              <a
                href='/cart'
                className="header__case"
              >
                <div className="header__count-position">

                <img
                  src={shoppingBag}
                  className="header__menu-opener_image"
                  alt="menu"
                  />
                <span className='header__shoping-bag-count'>
                  {expectToBuy}
                </span>
                </div>
              </a>
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
