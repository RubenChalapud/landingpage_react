import React from 'react';
import './LandingPage.css';
import './Components/Header/Header.css'
import Nav from "./Components/Nav/Nav.js";
import Header from "./Components/Header/Header.js"
import clientImg from "./client.png";
import rectDer from "./rec_der.png"; 
import rectIzq from "./rec_izq.png";  

function LandingPage() {
    return (
        <div className="o-landigpage">
            <Nav></Nav>
            <Header></Header>
            <div className="o-bg-rect">
                <img src={rectDer} alt="rectangulos" className="o-bg-rectangles"></img>
                <img src={rectIzq} alt="rectangulos" className="o-bg-rectangles"></img>
            </div>
            <div className="o-container-client-message">
                <img src={clientImg} alt= "Cliente" className="o-client-img"></img>
                <div className="o-center-container-message">
                    <h1 className="o-message-ligth">Trabajamos para</h1>
                    <div className="o-message-mixed">
                        <h1 className="o-message-black">Convertir ideas</h1>
                        <h1 className="o-message-ligth">en</h1>
                    </div>
                    <h1 className="o-message-ligth">productos.</h1>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
