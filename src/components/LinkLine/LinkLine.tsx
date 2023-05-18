import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../icons/Home.svg';
import blackHome from '../../icons/blackHome.svg';
import rightArrov from '../../icons/arrowRight.svg';
import blackRightArrov from '../../icons/blackArrowRight.svg';
import './LinkLine.scss';
import { ThemeContext } from '../../context/toggleContext';

interface Props {
  title: string;
}

const capitalize = (title: string) => {
  return title.charAt(0).toUpperCase() + title.slice(1);
};

export const LinkLine: FC<Props> = ({ title }) => {
  const { theme } = useContext(ThemeContext);
  let arrowPath = rightArrov;
  let homePath = home;

  if (theme === 'light') {
    arrowPath = blackRightArrov;
    homePath = blackHome;
  }

  return (
    <div className="link-line__links">
      <NavLink to="/" className="link-line__link">
        <img className="link-line__arrow" src={homePath} alt="home" />
      </NavLink>

      <span className="link-line__link">
        <img className="link-line__arrow" src={arrowPath} alt="right" />
        <p className="link-line__text">{capitalize(title)}</p>
      </span>
    </div>
  );
};
