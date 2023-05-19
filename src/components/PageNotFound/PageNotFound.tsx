import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

type PropsPageNotFound = {
  stateBtn: boolean,
  textGost: string,
}

export const PageNotFound: React.FC<PropsPageNotFound>
  = ({ stateBtn, textGost }) => {
    return (
      <div className="boo-container">
        <div className="boo-wrapper">
          <div className="boo">
            <div className="face"></div>
          </div>
          <div className="shadow"></div>

          <h1 className="boo-title">Ooops..</h1>
          <p className="boo-text">{textGost}</p>
          {
            stateBtn && <Link to={'/'}>
              <button className="boo-button">Back to Home</button>
            </Link>
          }
        </div>
      </div>
    );
  };
