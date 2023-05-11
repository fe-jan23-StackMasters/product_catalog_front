import { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text }) => {
  let href = to;

  if (href === '/home') {
    href = '/';
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) => classNames(
        'nav__link',
        { 'nav__link--is-active': isActive },
      )}
    >
      {text}
    </NavLink>
  );
};
