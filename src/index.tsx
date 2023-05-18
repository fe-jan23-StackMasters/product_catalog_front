import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.scss';
import './styles/utils/_reset.scss';
import './styles/normalize.scss';
import { App } from './App';
import { ThemeProvider } from './context/toggleContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </ThemeProvider>,
);
