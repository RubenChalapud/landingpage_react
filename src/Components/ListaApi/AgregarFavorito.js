import React from 'react';
import { AuthContext } from '../Context/auth';
import '../Button/Button.css';
import ButtonAgregar from './ButtonAgregar';

class Page extends React.Component{
    render(){
        return (
            <ButtonAgregar 
                uid={this.context.user.uid} 
                id={this.props.id}
                title={this.props.title}
                body={this.props.body}
            >
            </ButtonAgregar>
        ); 
    }
}

Page.contextType = AuthContext;

export default Page;
