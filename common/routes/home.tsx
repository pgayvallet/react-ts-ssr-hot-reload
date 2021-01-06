import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { Route, Link as RouterLink } from 'react-router-dom';

const HomePageComponent: FC<{}> = ({}) => {
  return (
    <div>
      Hello Home!
      <Button variant="contained" color="primary" component={RouterLink} to="/foo">
        To foo
      </Button>
    </div>
  );
};

export const HomePage = <Route path="/" exact={true} component={HomePageComponent} />;
