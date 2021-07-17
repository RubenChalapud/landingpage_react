import React  from "react";
import "./Links.css"

function Link(props){
    return <a className="o-link-nav" href={props.url}> {props.texto} </a>
}

function Links(){
    return(
        <div className="o-links-container-nav">
            <Link url="#" texto="INICIO"/>
            <Link url="#" texto="BENEFICIOS"/>
            <button className="o-nav-btn" >Login</button>
        </div>
    );

}
export default Links;