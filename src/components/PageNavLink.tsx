import { FC } from 'react';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export type Props = {
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text }) => {
  let href = to;

  if (href === '/home') {
    href = '/';
  }

  const location = useLocation();
  const page = location.pathname;

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        classNames('nav__link', { 'nav__link--is-active': isActive })
      }
    >
      {text}
      {href === page ? (
        <motion.div className="nav__link-underline" layoutId="underline" />
      ) : null}
    </NavLink>
  );
};
