import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '@material-ui/core/Button';

import LazyLoadable from 'components/Lazy/loadable';
import ErrorBoundary from './ErrorBoundary';
import './global.css?global';
import classes from './styles.css';
import { HomePage, FooPage } from '../../routes';
import { Switch } from 'react-router-dom';

const App: React.FunctionComponent = () => {
  const [isLoadableComponentShown, setIsLoadableComponentShown] = useState(false);
  const showLoadableComponent = useCallback(() => setIsLoadableComponentShown(true), []);

  return (
    <div className="app-container">
      <Helmet titleTemplate="%s - ts-react-ssr-basis">
        <title>Home</title>
      </Helmet>
      <h1 className={classes.title}>Welcome to Bob's Home Page</h1>
      <ErrorBoundary>
        {/*
        {isLoadableComponentShown ? (
          <LazyLoadable />
        ) : (
          <Button variant="contained" color="primary" onClick={showLoadableComponent}>
            Load lazy component
          </Button>
        )}
        */}
        <Switch>
          {HomePage}
          {FooPage}
        </Switch>
      </ErrorBoundary>
    </div>
  );
};

export default App;
