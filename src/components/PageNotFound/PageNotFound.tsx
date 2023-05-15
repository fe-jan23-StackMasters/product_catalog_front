import { Link } from 'react-router-dom';
import './PageNotFound.scss';

export const PageNotFound = () => (
  <div className="boo-container">
    <div className="boo-wrapper">
      <div className="boo">
        <div className="face"></div>
      </div>
      <div className="shadow"></div>

      <h1 className='boo-title'>Whoops!</h1>
      <p className='boo-text'>
        it seems you got lost..
      </p>
      <Link to={'/'}>
        <button className='boo-button'>
          Back to Home
        </button>
      </Link>
    </div>
  </div>
);
