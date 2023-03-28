import React from 'react';
import { waitForElement, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
// import PokemonDetails from '../componenrs/pokeDetails';
import PokemonCards from '../componenrs/pokeCard';
import userEvent from '@testing-library/user-event';


describe('Tests for PokemonDetails component', () => {
    it('should show the details of the clicked card', async () => {
        renderWithRouter(<PokemonCards />);
    
        const card = screen.getByRole('link', { name: /bulbasaur/});
    
        userEvent.click(card);
    
        const { pathname } = history.location;
        expect(pathname).toBe('/pokemons/1');
    
        await waitForElement(() => screen.getByText('Abilities'));
        expect(queryByText('Abilities')).toBeTruthy();
        expect(queryByText('Overgrow')).toBeTruthy();
        expect(queryByText('Chlorophyll')).toBeTruthy();
    });
});
