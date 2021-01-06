import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { Link as RouterLink, Route } from 'react-router-dom';

const FooPageComponent: FC<{}> = ({}) => {
  return (
    <div>
      Hello Foo!
      <Button variant="contained" color="primary" component={RouterLink} to="/">
        To home
      </Button>
    </div>
  );
};

export const FooPage = <Route path="/foo" exact={true} component={FooPageComponent} />;
