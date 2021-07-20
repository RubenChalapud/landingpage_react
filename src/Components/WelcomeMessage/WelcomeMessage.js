import React from 'react';
import './WelcomeMessage.css';
import logoWhite from './wb-logo.png';

function WelcomeMessage() {
    return (
    <div className="o-welcome-message-container">
        <div className="o-rect-welcome-container">
            <div className="o-rect-welcome"></div>
            <div className="o-container-logo-text">
                <img src={logoWhite} alt="Logo Waco" className="o-logo-white"></img>
                <p className="o-welcome-text">Bienvenido</p>
            </div>
        </div>
    </div>
    )
}

export default WelcomeMessage
