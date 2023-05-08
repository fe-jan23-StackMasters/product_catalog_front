import './Footer.scss';
import niceGadgetsSvg from '../../icons/niceGadgets.svg';
import okHand from '../../icons/okHand.png';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <a className="footer__logo" href='/'>
        <img
          src={niceGadgetsSvg}
          className="footer__logo--svg"
          alt="NICE GADGETS"
        />
        <img
          src={okHand}
          alt=""
          className="footer__logo--okHand"
        />
      </a>

      <ul className="footer__list">
        <li className="footer__item">
          <a
            href="https://github.com/fe-jan23-StackMasters"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >GITHUB</a>
        </li>
        <li className="footer__item">
          <a href="" className="footer__link">CONTACTS</a>
        </li>
        <li className="footer__item">
          <a href="" className="footer__link">RIGHTS</a>
        </li>
      </ul>

      <div className="footer__back">
        <a href="#" className="footer__back--link">
          Back to top
          <div className='footer__back--img'></div>
        </a>
      </div>
    </footer>
  );
};
