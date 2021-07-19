import React from 'react';
import igIcon from './ig-icon.png';
import wIcon from '../Nav/logoW.png';
import './Footer.css';
import Button from '../Button/Button';

function Footer() {
    return (
        <>
            <div className="o-footer-container">
                <div className="o-content-footer-container">
                    <div className="o-text-footer-container">
                        <p className="o-text-footer">Gracias por</p>
                        <p className="o-text-footer o-text-footer-color">completar el ejercicio</p>
                    </div>
                    <p className="o-text-footer-ligth">Te invitamos a ver mas información</p>
                    <div className="o-links-footer-container">
                        <a href="https://www.instagram.com/waconomads/"><img src={igIcon} alt="Instagram Icon" className="o-footer-icon"></img></a>
                        <Button text="Conocer más"></Button>
                    </div>
                </div>
            </div>
            <div className="o-container-end-footer">
                <img src={wIcon} alt="Waco Icon" className="o-footer-icon-end"></img>
            </div>            
        </>
    )
}

export default Footer
