import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoItem from '../../icons/niceGadgets.svg';
import logoItemOk from '../../icons/Ok.svg';
import menuOpener from '../../icons/Menu.svg';
import favoritesRed from '../../icons/faqvoritesFilled.svg';
import favoritesHart from '../../icons/favourites.svg';
import shoppingBag from '../../icons/shoppingBag.svg';
import { PageNavLink } from '../PageNavLink';
import { useCardsIds } from '../../helpers/hooks/hooks';
import classNames from 'classnames';

const navList = ['home', 'phones', 'tablets', 'accessories'];

export type Props = {
  toggleMenu: () => void;
};

export const Header: FC<Props> = ({
  toggleMenu,
}) => {
  const [cardIds] = useCardsIds('cart', []);
  const [favIds] = useCardsIds('favourite', []);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

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
          {isMobile && (
            <NavLink to="/" className="logo">
              <img className="logo__image" src={logoItem} alt="Logo icon" />
              <img className="logo__ok" src={logoItemOk} alt="ok" />
            </NavLink>
          )}

          {!isMobile && (
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
        </div>

          {!isMobile ? (
            <div className="header__buying-section">

              <NavLink
                to='/favourites'
                className={({ isActive }) => classNames(
                  'header__case',
                  { 'header__case--is-active': isActive },
                )}>
              {(favIds.length > 0) ? (
                <>
                  <div className="header__count-position">
                    <img
                      src={favoritesRed}
                      className="header__menu-opener_image"
                      alt="menu"
                    />
                    <span className='header__shoping-bag-count'>
                      {favIds.length}
                    </span>
                  </div>
                </>
              ) : (
                <img
                  src={favoritesHart}
                  className="header__menu-opener_image"
                  alt="menu"
                />
              )}
            </NavLink>

              <NavLink
                to='/cart'
                className={({ isActive }) => classNames(
                  'header__case',
                  { 'header__case--is-active': isActive },
                )}>
                <div className="header__count-position">

                  <img
                    src={shoppingBag}
                    className="header__menu-opener_image"
                    alt="menu"
                    />
                  {cardIds.length > 0 && (
                    <span className='header__shoping-bag-count'>
                      {cardIds.length}
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
