import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import WelcomeMessage from './Components/WelcomeMessage/WelcomeMessage';
import './Login.css';

function Registro() {
    const [Message, setMessage] = useState(true);

    const showMessage = () => {
        if (window.innerWidth <= 960) {
            setMessage(false);
        } else {
            setMessage(true);
        }
      };
    
    useEffect(() => {
        showMessage();
    }, []);
    
    window.addEventListener('resize', showMessage);

    return (
        <div className="o-loginpage">
            <NavBar></NavBar>
            <div className="o-content-login-container">
                {Message && <WelcomeMessage></WelcomeMessage>}
                <div className="o-form-login-container">

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Registro
