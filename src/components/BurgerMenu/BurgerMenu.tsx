import React from 'react';
import './BurgerMenu.scss';
import like from '../../icons/favourites.svg';
import cardIcon from '../../icons/shoppingBag.svg';
import { PageNavLinkBurger } from '../PageNavLinkBurger';
import { NavLink } from 'react-router-dom';
import { useLocalStorageContext } from '../../context/StorageContext';
import { motion } from 'framer-motion';

export type Props = {
  toggleMenu: () => void;
};

const menuList: string[] = ['home', 'phones', 'tablets', 'accessories'];

export const BurgerMenu: React.FC<Props> = ({ toggleMenu }) => {
  const { favorites, cartItems } = useLocalStorageContext();

  return (
    <motion.div
      className="menu"
      initial={{
        transform: 'translateX(-100%)',
      }}
      animate={{
        transform: 'translateX(0)',
      }}
      exit={{
        transform: 'translateX(100%)',
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="menu__content">
        <ul className="menu__content-list">
          {menuList.map((item) => (
            <li className="menu__content-list-item" key={item}>
              <PageNavLinkBurger
                to={`/${item}`}
                text={item}
                toggleMenu={toggleMenu}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="menu__footer">
        <NavLink
          to="/favourites"
          className="btn likeButton"
          onClick={toggleMenu}
        >
          <div className="menu__footer-button">
            <img src={like} />
            {cartItems.length > 0 && (
              <span className="menu__footer-count header__shoping-bag-count">
                {favorites.length}
              </span>
            )}
          </div>
        </NavLink>
        <NavLink to="/cart" className="btn cardButton" onClick={toggleMenu}>
          <div className="menu__footer-button">
            <img src={cardIcon} />
            {cartItems.length > 0 && (
              <span className="menu__footer-count header__shoping-bag-count">
                {cartItems.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </motion.div>
  );
};
