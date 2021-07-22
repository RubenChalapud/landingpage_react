import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './Context/auth';

class PrivateRoute extends React.Component{
    render(){
        const {
            type,
            ...rest 
        } = this.props;
        const {
            isLoggedIn, 
        } = this.context;

        if(type === 'private' && !isLoggedIn){
            return <Redirect to="/Login"></Redirect>
        } else if (type === 'public' && isLoggedIn){
            return <Redirect to='/Dashboard'></Redirect>
        }

        return <Route {...rest}></Route>
    }
}

PrivateRoute.contextType = AuthContext;

export default PrivateRoute;