import React from "react";
import Header from "../componenrs/header";
import PokemonDetails from "../componenrs/pokeDetails";
import Footer from "../componenrs/footer";
import '../style/detailPage.css'

const DetailsPage = () => {
    return (
        <div>
        <Header />
        <PokemonDetails />
        <Footer />
        </div>
    );
}

export default DetailsPage;