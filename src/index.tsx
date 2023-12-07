import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

import { RouterUtils } from 'app/providers/router/ui/RouterUtils';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

import App from './app/App';

render(
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
  document.getElementById('root'),
);
