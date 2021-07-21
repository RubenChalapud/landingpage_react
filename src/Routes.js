import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage';
import Login from './Login';
import Registro from './Registro';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Registro" component={Registro}></Route>
    </Switch>
);

export default Routes;