import React from 'react';
import './LandingPage.css';
import './Components/Header/Header.css'
import Nav from "./Components/Nav/Nav.js";
import Header from "./Components/Header/Header.js";
import Rectangle from './Components/Rectangle/Rectangle.js';
import ClientMessage from './Components/ClientMessage/ClientMessage.js';
import BenefitstTitle from './Components/Benefits/BenefitsTitle.js';
import Carusel from './Components/Carusel/Carusel.js';
import igIcon from './ig-icon.png';
import wIcon from './Components/Nav/logoW.png';

function LandingPage() {
    return (
        <div className="o-landigpage">
            <Nav></Nav>
            <Header></Header>
            <Rectangle></Rectangle>
            <ClientMessage></ClientMessage>
            <BenefitstTitle></BenefitstTitle>
            <Carusel></Carusel>
            <div className="o-footer-container">
                <div className="o-content-footer-container">
                    <div className="o-text-footer-container">
                        <p className="o-text-footer">Gracias por</p>
                        <p className="o-text-footer o-text-footer-color">completar el ejercicio</p>
                    </div>
                    <p className="o-text-footer-ligth">Te invitamos a ver mas información</p>
                    <div className="o-links-footer-container">
                        <a href="https://www.instagram.com/waconomads/"><img src={igIcon} alt="Instagram Icon" className="o-footer-icon"></img></a>
                        <a href="https://wacoservices.com/" type="button">Conocer más</a>
                    </div>
                </div>
            </div>
            <div className="o-container-end-footer">
                <img src={wIcon} alt="Waco Icon" className="o-footer-icon-end"></img>
            </div>
        </div>
    );
}

export default LandingPage;
