import { FC, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import home from '../../icons/Home.svg';
import blackHome from '../../icons/blackHome.svg';
import rightArrov from '../../icons/arrowRight.svg';
import blackRightArrov from '../../icons/blackArrowRight.svg';
import './LinkLine.scss';
import { ThemeContext } from '../../context/toggleContext';
import classNames from 'classnames';

interface Props {
  title: string | undefined;
}

const capitalize = (title: string) => {
  return title.charAt(0).toUpperCase() + title.slice(1);
};

export const LinkLine: FC<Props> = ({ title }) => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  let arrowPath = rightArrov;
  let homePath = home;

  if (theme === 'light') {
    arrowPath = blackRightArrov;
    homePath = blackHome;
  }

  const isActiveLink = location.pathname === `/${title?.toLowerCase()}`;
  const isNamePath = location.pathname.startsWith(`/${title?.toLowerCase()}/`);

  return (
    <div className="link-line__links">
      <NavLink to="/" className="link-line__link">
        <img className="link-line__arrow" src={homePath} alt="home" />
      </NavLink>

      <NavLink
        to={`/${title?.toLocaleLowerCase()}`}
        className={classNames('link-line__link', {
          'link-line__link--is-active': isActiveLink && !isNamePath,
          'link-line__link--is-name-path': isNamePath,
        })}
      >
        <img className="link-line__arrow" src={arrowPath} alt="right" />
        <p className="link-line__text">{capitalize(title || '')}</p>
      </NavLink>
    </div>
  );
};
