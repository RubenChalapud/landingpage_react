import React from 'react';
import './LandingPage.css';
import './Components/Header/Header.css'
import Nav from "./Components/Nav/Nav.js";
import Header from "./Components/Header/Header.js";
import Rectangle from './Components/Rectangle/Rectangle.js';
import ClientMessage from './Components/ClientMessage/ClientMessage.js';
import BenefitstTitle from './Components/Benefits/BenefitsTitle.js';
import websiteIcon from "./websiteIcon.png";
import websiteIcon1 from "./websiteIcon1.png";
import websiteIcon2 from "./websiteIcon2.png";
import websiteIcon3 from "./websiteIcon3.png";

function LandingPage() {
    return (
        <div className="o-landigpage">
            <Nav></Nav>
            <Header></Header>
            <Rectangle></Rectangle>
            <ClientMessage></ClientMessage>
            <BenefitstTitle></BenefitstTitle>
            <div className="o-carusel-container">
                <div className="o-carusel-item-container">
                    <img src={websiteIcon} alt= "Website Icon" className="o-carusel-item-img"></img>
                    <p className="o-carusel-item-text">Flexibilidad Horaria</p>
                </div>
                <div className="o-carusel-item-container">
                    <img src={websiteIcon1} alt= "Website Icon" className="o-carusel-item-img"></img>
                    <p className="o-carusel-item-text">Home office</p>
                </div>
                <div className="o-carusel-item-container">
                    <img src={websiteIcon2} alt= "Website Icon" className="o-carusel-item-img"></img>
                    <p className="o-carusel-item-text">Capacitaciones y workshops</p>
                </div>
                <div className="o-carusel-item-container">
                    <img src={websiteIcon3} alt= "Website Icon" className="o-carusel-item-img"></img>
                    <p className="o-carusel-item-text">Snacks, frutas y bebidas gratis</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
