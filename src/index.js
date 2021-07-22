import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './Components/Context/auth';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import Login from './Login';
import Registro from './Registro';
import { DataContextProvider } from './Components/Context/data';

const root = (
  <BrowserRouter>
    <AuthContextProvider>
      <DataContextProvider>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Registro" component={Registro}></Route>
          <Route exact path="/Dashboard" component={Dashboard}></Route>
        </Switch>
      </DataContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));