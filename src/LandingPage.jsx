import React from 'react';
import './LandingPage.css';
import './Components/Header/Header.css'
import Nav from "./Components/Nav/Nav.js";
import Header from "./Components/Header/Header.js";
import Rectangle from './Components/Rectangle/Rectangle.js';
import ClientMessage from './Components/ClientMessage/ClientMessage.js';
import BenefitstTitle from './Components/Benefits/BenefitsTitle.js';

function LandingPage() {
    return (
        <div className="o-landigpage">
            <Nav></Nav>
            <Header></Header>
            <Rectangle></Rectangle>
            <ClientMessage></ClientMessage>
            <BenefitstTitle></BenefitstTitle>
        </div>
    );
}

export default LandingPage;
