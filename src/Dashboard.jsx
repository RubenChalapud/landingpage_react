import React from 'react';
import { DataContext } from './Components/Context/data';

class Page extends React.Component{

    render(){
        return (
            <div>
                <h1>{this.context.data.length}</h1>
            </div>
        ); 
    }
}

Page.contextType = DataContext;

export default Page;
