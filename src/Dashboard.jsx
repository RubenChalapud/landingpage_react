import React from 'react';
import { DataContext } from './Components/Context/data';
import ListaApi from './Components/ListaApi/ListaApi';

class Page extends React.Component{

    render(){
        return (
            <div>
                <h1>{this.context.data.length}</h1>
                <ListaApi></ListaApi>
            </div>
        ); 
    }
}

Page.contextType = DataContext;

export default Page;
