import React from 'react';
import './Header.css';
import bgImg from "./bg_Img.png";
import logoNameImg from "./nameLogo.png";

export default function Header() {
    return (
        <header className="o-header">
            <img src={bgImg} alt= "Imagen Fondo" className="o-header-bgImg"></img>
            <div className="o-header-container-message">
                <h1 className="o-message-ligth">Bienvenido a tu</h1>
                <div className="o-message-mixed">
                    <h1 className="o-message-black">Entrevista Tecnica</h1>
                    <h1 className="o-message-ligth">en</h1>
                </div>
                <img src={logoNameImg} alt= "WACO Logo" className="o-header-nameLogo"></img>
            </div>
        </header>
    )
}
