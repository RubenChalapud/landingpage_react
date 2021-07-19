import React from 'react';
import './Carusel.css'
import Carousel from "react-elastic-carousel";
import CaruselItem from './CaruselItem/CaruselItem.js';
import websiteIcon from "./websiteIcon.png";
import websiteIcon1 from "./websiteIcon1.png";
import websiteIcon2 from "./websiteIcon2.png";
import websiteIcon3 from "./websiteIcon3.png";
import websiteIcon4 from "./websiteIcon4.png";
import websiteIcon5 from "./websiteIcon5.png";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function Carusel() {
    return (  
        <Carousel breakPoints={breakPoints} className="o-carusel-container">
            <CaruselItem icon={websiteIcon} text="Flexibilidad Horaria"></CaruselItem>
            <CaruselItem icon={websiteIcon1} text="Home office"></CaruselItem>
            <CaruselItem icon={websiteIcon2} text="Capacitaciones y workshops"></CaruselItem>
            <CaruselItem icon={websiteIcon3} text="Snacks, frutas y bebidas gratis"></CaruselItem>
            <CaruselItem icon={websiteIcon4} text="Semana Remota"></CaruselItem>
            <CaruselItem icon={websiteIcon5} text="Trabajar en ultimas tecnologias"></CaruselItem>
        </Carousel>
    )
}
