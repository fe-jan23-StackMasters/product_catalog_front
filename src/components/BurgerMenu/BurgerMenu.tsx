import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import logo from '../../icons/Logo.svg';
import cross from '../../icons/Close.svg';
import like from '../../icons/favourites.svg';
import cardIcon from '../../icons/shoppingBag.svg';
import { PageNavLinkBurger } from '../PageNavLinkBurger';

export type Props = {
  toggleMenu: () => void;
};

export const BurgerMenu: React.FC<Props> = ({ toggleMenu }) => {
  const menuList: string[] = ['home', 'phones', 'tablets', 'accessories'];

  return (
    <div className="menu">
      <div className="menu__header">
        <div className="menu__header-contaioner logo">
          <a href="/Home" className="menu__icon">
            <img src={logo} className="menu__icon-logoIcon" />
          </a>
        </div>
        <button
          className="menu__header-contaioner closeButton"
          onClick={toggleMenu}
        >
          <img src={cross} className="crossIcon" />
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
        <NavLink
          to='/favourites'
          className="btn likeButton"
          onClick={toggleMenu}
        >
          <img src={like} />
        </NavLink>
        <NavLink
          to='/cart'
          className="btn cardButton"
          onClick={toggleMenu}
        >
          <img src={cardIcon} />
        </NavLink>
      </div>
    </div>
  );
};
