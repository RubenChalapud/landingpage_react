import React, { useState } from 'react';
import Logo from "./logoW.png";
import Links from "./Link/Links.js";
import './Nav.css';

export default function Nav() {
    const[navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 10){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbar ? 'o-nav active' : 'o-nav'}>
            <img src={Logo} alt= "Logo Waco" className="o-img-logo"></img>
            <Links></Links>
        </nav>
    )
}
