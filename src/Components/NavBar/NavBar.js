import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { ButtonN } from './ButtonN';
import Logo from "./logoW.png";

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const[navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 1){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    const scrollToTop = () =>{
        closeMobileMenu();
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    const scrollToBenefits = () =>{
        closeMobileMenu(); 
        window.scrollTo({
          top: 870, 
          behavior: 'smooth'
        });
    };
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', changeBackground);

    return (
        <>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img src={Logo} alt= "Logo Waco" className="o-img-logo"></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={scrollToTop}>
                    INICIO
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={scrollToBenefits}>
                  BENEFICIOS
                </Link>
              </li>  
              <li>
                <Link
                  to='/Login' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Login
                </Link>
              </li>
            </ul>
            {button && <ButtonN buttonStyle='btn--outline' to={"/Login"}>Login</ButtonN>}
          </div>
        </nav>
      </>
    )
}

export default NavBar
