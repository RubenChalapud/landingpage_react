import React from 'react';
import { AuthContext } from '../Context/auth';
import DataFav from './DataFav';

class Page extends React.Component{
    render(){
        return (
            <div className="o-container-favdata">
                <div className="o-container-dashtitle">
                    <h1 className="o-dashboard-title">Tus Favoritos </h1>
                    <h1 className="o-dashboard-title">{this.context.user.email}</h1>
                </div>
                <DataFav uid={this.context.user.uid}></DataFav>
            </div>
        ); 
    }
}

Page.contextType = AuthContext;

export default Page;
