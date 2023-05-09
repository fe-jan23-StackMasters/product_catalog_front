import React from 'react';
import newPhone from '../../images/header/headerPhonePic14Pro.png';
import logoItem from '../../icons/niceGadgets.svg';
import logoItemOk from '../../icons/Ok.svg';
import menuOpener from '../../icons/Menu.svg';
import reactangleLight from '../../icons/lightRectangle.svg';
import reactangleDark from '../../icons/darkReactangle.svg';

export const Header = () => {
  return (
    <div className='container'>
      <header className="header" >
        <div className="header__nav">
            <a href="/" className="logo">
              <img className="logo__image" src={logoItem} alt="Logo icon" />
              <img className="logo__ok" src={logoItemOk} alt="ok" />
            </a>

            <a href='/' className="header__menu-opener">
              <img
                className="header__menu-opener_image"
                src={menuOpener}
                alt="menu"
              />
            </a>
        </div>

        <h1 className="header__title">
          Welcome to Nice Gadgets store!
        </h1>

        <img className="header__novelty" src={newPhone} alt="New 14 Pro" />

        <div className="header__scroller">
          <img src={reactangleLight} alt="next" />
          <img src={reactangleDark} alt="next" />
          <img src={reactangleDark} alt="next" />
        </div>
      </header>
    </div>
  );
};
