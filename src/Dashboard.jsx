import React from 'react';
import { AuthContext } from './Components/Context/auth';
import NavDashboard from './Components/NavBar/NavDashboard';
import './Dashboard.css';
import Footer from './Components/Footer/Footer';
import TablaApi from './Components/ListaApi/TablaApi';
import ListaFav from './Components/ListaFav/ListaFav';

class Page extends React.Component{

    render(){
        return (
            <div className="o-dashboard">
                <NavDashboard></NavDashboard>
                <TablaApi></TablaApi>
                <ListaFav></ListaFav>
                <Footer></Footer>
            </div>
        ); 
    }
}

Page.contextType = AuthContext;

export default Page;
