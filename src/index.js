import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AuthContextProvider } from './Components/Context/auth';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import Login from './Login';
import Registro from './Registro';
import { DataContextProvider } from './Components/Context/data';
import PrivateRoute from './Components/PrivateRoute';
import Root from './Components/Root';

const root = (
  <BrowserRouter>
    <AuthContextProvider>
      <DataContextProvider>
        <Root>
          <Switch>
            <PrivateRoute exact path="/" component={LandingPage}></PrivateRoute>
            <PrivateRoute type="public" exact path="/Login" component={Login}></PrivateRoute>
            <PrivateRoute exact path="/Registro" component={Registro}></PrivateRoute>
            <PrivateRoute type="private" exact path="/Dashboard" component={Dashboard}></PrivateRoute>
          </Switch>
        </Root>
      </DataContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));