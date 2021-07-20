import React from 'react';
import './LandingPage.css';
import './Components/Header/Header.css';
import Header from "./Components/Header/Header.js";
import Rectangle from './Components/Rectangle/Rectangle.js';
import ClientMessage from './Components/ClientMessage/ClientMessage.js';
import BenefitstTitle from './Components/Benefits/BenefitsTitle.js';
import Carusel from './Components/Carusel/Carusel.js';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';

function LandingPage() {
    return (
        <div className="o-landigpage">
            <NavBar></NavBar>
            <Header></Header>
            <Rectangle></Rectangle>
            <ClientMessage></ClientMessage>
            <BenefitstTitle></BenefitstTitle>
            <Carusel></Carusel>
            <Footer></Footer>
        </div>
    );
}

export default LandingPage;
