import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.scss';
import './styles/utils/_reset.scss';
import './styles/variables.scss';
import './styles/normalize.scss';
import { App } from './App';
import { ThemeProvider } from './context/toggleContext';
import { LocalStorageProvider } from './context/StorageContext';
import { ResizeProvider } from './context/ResizeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
  <LocalStorageProvider>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ResizeProvider>
          <Router>
            <App />
          </Router>
        </ResizeProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </LocalStorageProvider>,
);
