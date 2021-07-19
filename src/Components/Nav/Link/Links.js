import React from "react";
import "./Links.css"

function Link(props){
    return <a className="o-link-nav" href={props.url} onClick={props.click}> {props.texto} </a>
}

function Links(){

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    const scrollToBenefits = () =>{
        window.scrollTo({
          top: 930, 
          behavior: 'smooth'
        });
    };

    return(
        <div className="o-links-container-nav">
            <Link click={scrollToTop} texto="INICIO"/>
            <Link click={scrollToBenefits} texto="BENEFICIOS"/>
            <button className="o-nav-btn" >Login</button>
        </div>
    );

}
export default Links;