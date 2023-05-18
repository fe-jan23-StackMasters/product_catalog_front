import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../icons/Home.svg';
import rightArrov from '../../icons/arrowRight.svg';
import './LinkLine.scss';

interface Props {
  title: string | undefined;
}

const capitalize = (title: string) => {
  return title.charAt(0).toUpperCase() + title.slice(1);
};

export const LinkLine: FC<Props> = ({ title }) => {
  return (
    <div className="link-line__links">
      <NavLink to="/" className="link-line__link">
        <img className="link-line__arrow" src={home} alt="home" />
      </NavLink>

      <span className="link-line__link">
        <img className="link-line__arrow" src={rightArrov} alt="right" />
        <p className="link-line__text">{capitalize(title)}</p>
      </span>
    </div>
  );
};
