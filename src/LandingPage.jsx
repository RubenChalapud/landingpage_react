import React from 'react';
import './LandingPage.css';
import Nav from "./Components/Nav/Nav.js";
import Header from "./Components/Header/Header.js"


function LandingPage() {
    return (
        <div className="o-landigpage">
            <Nav></Nav>
            <Header></Header>
        </div>
    );
}

export default LandingPage;
