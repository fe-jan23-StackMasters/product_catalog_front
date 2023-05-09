import React, { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'nav__link',
      { 'nav__link--is-active': isActive },
    )}
  >
    {text}
  </NavLink>
);
