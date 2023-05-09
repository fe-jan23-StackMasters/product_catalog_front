import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import './styles/utils/_reset.scss';
import './styles/normalize.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Router>
    <App />
  </Router>,
);
