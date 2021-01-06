import '@babel/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';

const renderApp = (): void => {
  hydrate(
    <HelmetProvider>
      <BrowserRouter>
        <App />
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
