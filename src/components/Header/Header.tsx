import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// import newPhone from '../../images/header/headerPhonePic14Pro.png';
import logoItem from '../../icons/niceGadgets.svg';
import logoItemOk from '../../icons/Ok.svg';
import menuOpener from '../../icons/Menu.svg';
// import favoritesRed from '../../icons/faqvoritesFilled.svg';
import favorites from '../../icons/favourites.svg';
import shoppingBag from '../../icons/shoppingBag.svg';

const navList = ['home', 'phones', 'tablets', 'accessories'];

// export type Props = {
//   to: string;
//   text: string;
// };

// export const PageNavLink: FC<Props> = ({ to, text }) => (
//   <NavLink
//     to={to}
//     className={({ isActive }) => classNames(
//       'nav__link',
//       { 'nav__link--is-active': isActive },
//     )}
//   >
//     {text}
//   </NavLink>
// );

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      setIsMobile(windowWidth > 639);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header" >
      <div className='container'>
        <div className="header__content">
          <a href="/" className="logo">
            <img
              className="logo__image"
              src={logoItem} alt="Logo icon"
            />
            <img className="logo__ok" src={logoItemOk} alt="ok" />
          </a>

            {isMobile ? (
              <>
                <nav className="header__nav nav">
                  <ul className="nav__panel">
                    {navList.map(item => (
                      <li key={item} className="nav__item">
                        <a href={`/${item}`} className={classNames(
                          'nav__link',
                          { 'nav__link--is-active': false },
                        )}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                  </nav>

                  <div className="header__buying-section">

                  <a href='/' className="header__menu-opener">
                  <img
                    className="header__menu-opener_image"
                    src={favorites}
                    alt="menu"
                    />
                  </a>

                  <a href='/' className="header__menu-opener">
                  <img
                    className="header__menu-opener_image"
                    src={shoppingBag}
                    alt="menu"
                    />
                  </a>
                  </div>
                </>
            ) : (
              <a href='/' className="header__menu-opener">
                <img
                  className="header__menu-opener_image"
                  src={menuOpener}
                  alt="menu"
                  />
              </a>
            )}

        {/* <h1 className="header__title">
          Welcome to Nice Gadgets store!
        </h1>

        <img className="header__novelty" src={newPhone} alt="New 14 Pro" />

        <div className="header__scroller">
          <img src={reactangleLight} alt="next" />
          <img src={reactangleDark} alt="next" />
          <img src={reactangleDark} alt="next" />
        </div> */}
        </div>
      </div>
    </header>
  );
};
