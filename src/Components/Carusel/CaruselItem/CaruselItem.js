import React from 'react';

export default function CaruselItem(props) {
    return (
        <div className="o-carusel-item-container">
            <img src={props.icon} alt= "Website Icon" className="o-carusel-item-img"></img>
            <p className="o-carusel-item-text">{props.text}</p>
        </div>
    )
}
