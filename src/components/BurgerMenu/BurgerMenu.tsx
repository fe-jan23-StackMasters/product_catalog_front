import React from 'react';
import './BurgerMenu.scss';
import logo from '../../icons/Logo.svg';
import cross from '../../icons/Close.svg';
import like from '../../icons/favourites.svg';
import cardIcon from '../../icons/shoppingBag.svg';

export const BurgerMenu: React.FC = () => {
  const menuList: string[] = ['HOME', 'PHONES', 'TABLETS', 'ACCESSORIES'];

  return (
    <div className="contaionerBurger">
      <div className="contaionerBurger_header">
        <div className="contaionerBurger_header logo">
          <a href="/Home" className="IconUrl">
            <img src={logo} className="IconUrl-logoIcon" />
          </a>
        </div>
        <button
          className="contaionerBurger_header closeButton"
          onClick={() => {
            return null;
          }}
        >
          <img src={cross} className="crossIcon" />
        </button>
      </div>
      <div className="contaionerBurger_menu">
        <ul className="contaionerBurger_menu list">
          {menuList.map((item) => (
            <li className="list-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="contaionerBurger footer">
        <button className="btn likeButton">
          <img src={like} />
        </button>
        <button className="btn cardButton">
          <img src={cardIcon} />
        </button>
      </div>
    </div>
  );
};
