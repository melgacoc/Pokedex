import React, { Component } from 'react';
import PokemonCards from '../componenrs/pokeCard';
import Header from '../componenrs/header';
import Footer from '../componenrs/footer';
import '../style/pokeTable.css'

class PokeTable extends Component {
    render() {
        return (
            <div className='background'>
                <Header />
                <PokemonCards />
                <Footer />
            </div>
        );
    }
}

export default PokeTable;