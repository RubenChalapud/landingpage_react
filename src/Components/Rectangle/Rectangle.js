import React from 'react';
import rectDer from "./rec_der.png"; 
import rectIzq from "./rec_izq.png"; 

export default function Rectangle() {
    return (
        <div className="o-bg-rect">
            <img src={rectDer} alt="rectangulos" className="o-bg-rectangles"></img>
            <img src={rectIzq} alt="rectangulos" className="o-bg-rectangles"></img>
        </div>
    )
}
