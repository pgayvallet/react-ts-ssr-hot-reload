import '@babel/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from '../common/theme';
import App from 'components/App';

const renderApp = (): void => {
  // remove ssr theme styles
  const jssStyles = document.querySelector('#jss-server-side');
  if (jssStyles) {
    jssStyles.remove();
  }

  hydrate(
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>,
    document.getElementById('react-view')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('components/App', () => {
    renderApp();
  });
}
