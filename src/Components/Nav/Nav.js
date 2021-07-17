import React from 'react';
import Logo from "./logoW.png";
import Links from "./Link/Links.js";
import './Nav.css';

export default function Nav() {
    return (
        <div className="o-nav">
            <img src={Logo} alt= "Logo Waco" className="o-img-logo"></img>
            <Links></Links>
        </div>
    )
}
