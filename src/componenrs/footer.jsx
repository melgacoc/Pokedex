import React from "react";
import '../style/footer.css';
import emptyBall from '../images/emptyBall.png'

const Footer = () => {
    return (
      <div className="footer">
        <img className="footerPokeball" src={ emptyBall } alt="pokeball"/>
        <div>

        <p>Created by: </p>
        <p className="footerText">
          <a href="https://github.com/melgacoc/pokedex">Cláudio Melgaço</a>
        </p>
        </div>
        <img className="footerPokeball" src={ emptyBall } alt="pokeball"/>
      </div>
    );
  };
  
  export default Footer;
  