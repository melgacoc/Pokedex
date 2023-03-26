import React from "react";
import '../style/footer.css';
import emptyBall from '../images/emptyBall.png'

const Footer = () => {
    return (
      <div className="footer">
        <img className="footerPokeball" src={ emptyBall } alt="pokeball"/>
        <div>

        <p>Created by: </p>
        <p>
          <a href="https://github.com/melgacoc/pokedex">© 2023 PokeApp</a>
        </p>
        </div>
        <img className="footerPokeball" src={ emptyBall } alt="pokeball"/>
      </div>
    );
  };
  
  export default Footer;
  