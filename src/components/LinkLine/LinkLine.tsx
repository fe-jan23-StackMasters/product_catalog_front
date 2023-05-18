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

export const LinkLine: FC<Props> = ({ title }) => {
  const { theme } = useContext(ThemeContext);
  let arrowPath = rightArrov;
  let homePath = home;

  if (theme === 'light') {
    arrowPath = blackRightArrov;
    homePath = blackHome;
  }

  return (
    <div className="accessories__links">
      <NavLink to="/" className="accessories__link">
        <img className="accessories__arrow" src={homePath} alt="home" />
      </NavLink>

      <span className="accessories__link">
        <img className="accessories__arrow" src={arrowPath} alt="right" />
        {title}
      </span>
    </div>
  );
};
