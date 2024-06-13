import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { RouterUtils } from '@/app/providers/router/ui/RouterUtils';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import '@/shared/config/i18n/i18n';

import App from './app/App';

import '@/app/styles/index.scss';

const container = document.getElementById('root');

if(!container) {
  throw new Error("Root container not found");
}

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <RouterUtils>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </RouterUtils>
  </BrowserRouter>,
);
