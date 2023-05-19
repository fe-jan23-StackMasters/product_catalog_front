import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export type Props = {
  to: string;
  text: string;
  toggleMenu: (status?: boolean) => void;
};

export const PageNavLinkBurger: FC<Props> = ({ to, text, toggleMenu }) => (
  <NavLink
    onClick={() => toggleMenu()}
    to={to}
    className={({ isActive }) =>
      classNames('nav__link', { 'nav__link--is-active': isActive })
    }
  >
    {text}
  </NavLink>
);
