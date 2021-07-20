import React from 'react';
import clientImg from "./client.png"; 

export default function ClientMessage() {
    return (
    <div className="o-container-client-message">
        <img src={clientImg} alt= "Cliente" className="o-client-img"></img>
        <div className="o-center-container-message">
            <h1 className="o-client-msg o-message-ligth">Trabajamos para</h1>
            <div className="o-message-mixed">
                <h1 className="o-client-msg o-message-black">Convertir ideas</h1>
                <h1 className="o-client-msg o-message-ligth">en</h1>
            </div>
            <h1 className="o-client-msg o-message-black">productos.</h1>
        </div>
    </div>
    )
}
