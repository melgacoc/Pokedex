import React from "react";
import '../style/header.css' 
import logo from '../images/logo.png'   

const Header = () => {
    return (
        <div className="backgroundHeader">
            <img className="logo"
            src={ logo } alt="" />
        </div>
    );
}

export default Header;