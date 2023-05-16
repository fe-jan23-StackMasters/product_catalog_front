import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../icons/Home.svg';
import rightArrov from '../../icons/arrowRight.svg';
import './LinkLine.scss';

interface Props {
  title: string;
}

export const LinkLine: FC<Props> = ({ title }) => {
  return (
    <div className="accessories__links">
      <NavLink to="/" className="accessories__link">
        <img className="accessories__arrow" src={home} alt="home" />
      </NavLink>

      <span className="accessories__link">
        <img className="accessories__arrow" src={rightArrov} alt="right" />
        {title}
      </span>
    </div>
  );
};
