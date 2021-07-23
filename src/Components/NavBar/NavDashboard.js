import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { ButtonN } from './ButtonN';
import Logo from "./logoW.png";
import { auth } from '../../App';
import swal from 'sweetalert';

function NavDashboard() {
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
          top: 672, 
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

    const logOut = () =>{
      swal({
          text: '¿Estás seguro de Cerrar Sesion?', 
          icon: "warning",
          buttons: ["No", "Si"]
      }).then(r =>{
          if(r){
            auth.signOut();
          }
      })
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
                <Link to="/Dashboard" className='nav-links' onClick={scrollToTop}>
                    API
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/Dashboard" className='nav-links' onClick={scrollToBenefits}>
                  FAVORITOS
                </Link>
              </li>  
              <li>
                <Link
                  to='/Dashboard' className='nav-links-mobile' onClick={()=>{ closeMobileMenu(); logOut() }}>
                  Salir
                </Link>
              </li>
            </ul>
            {button && <ButtonN buttonStyle='btn--outline' to={"/Dashboard"} onClick={logOut}>Cerrar Sesion</ButtonN>}
          </div>
        </nav>
      </>
    )
}

export default NavDashboard