import React, { useContext } from 'react';
import './BurgerMenu.scss';
import logo from '../../icons/Logo.svg';
import blackLogo from '../../icons/blackNice.svg';
import cross from '../../icons/Close.svg';
import blackCross from '../../icons/blackClose.svg';
import like from '../../icons/favourites.svg';
import blackLike from '../../icons/blackHeart.svg';
import cardIcon from '../../icons/shoppingBag.svg';
import blackCartIcon from '../../icons/blackShopingCart.svg';
import { PageNavLinkBurger } from '../PageNavLinkBurger';
import { ThemeContext } from '../../context/toggleContext';

export type Props = {
  toggleMenu: () => void;
};

export const BurgerMenu: React.FC<Props> = ({ toggleMenu }) => {
  const menuList: string[] = ['home', 'phones', 'tablets', 'accessories'];
  const { theme } = useContext(ThemeContext);
  let logoPath = logo;
  let closePath = cross;
  let likePath = like;
  let cartPath = cardIcon;

  if (theme === 'light') {
    logoPath = blackLogo;
    closePath = blackCross;
    likePath = blackLike;
    cartPath = blackCartIcon;
  }

  return (
    <div className="menu">
      <div className="menu__header">
        <div className="menu__header-contaioner logo">
          <a href="/Home" className="menu__icon">
            <img src={logoPath} className="menu__icon-logoIcon" />
          </a>
        </div>
        <button
          className="menu__header-contaioner closeButton"
          onClick={toggleMenu}
        >
          <img src={closePath} className="crossIcon" />
        </button>
      </div>
      <div className="menu__content">
        <ul className="menu__content-list">
          {menuList.map((item) => (
            <li className="menu__content-list item" key={item}>
              {/* {item} */}
              <PageNavLinkBurger
                to={`/${item}`}
                text={item}
                toggleMenu={toggleMenu}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="menu__content footer">
        <button className="btn likeButton">
          <img src={likePath} />
        </button>
        <button className="btn cardButton">
          <img src={cartPath} />
        </button>
      </div>
    </div>
  );
};
