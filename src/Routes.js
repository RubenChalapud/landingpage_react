import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage';
import Login from './Login';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/Login" component={Login}></Route>
    </Switch>
);

export default Routes;