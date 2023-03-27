import React from 'react';
import { waitForElement, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import PokemonCards from './PokemonCards';


describe('Tests for PokemonCards component', () => {
  it('should load more cards when the button is clicked', async () => {
    renderWithRouter(<PokemonCards />);
    
    expect(queryByText('#1 - bulbasaur')).toBeTruthy();
    expect(queryByText('#18 - pidgeot')).toBeTruthy();
    expect(queryByText('#19 - ratatta')).toBeFalsy();
    
    userEvent.click(getByText('Load More'));
    await waitForElement(() => getByText('#19 - ratatta'));
    
    expect(queryByText('#19 - ratatta')).toBeTruthy();
    expect(queryByText('#36 - clefable')).toBeFalsy();
    
    userEvent.click(getByText('Load More'));
    await waitForElement(() => getByText('#36 - clefable'));
    
    expect(queryByText('#36 - clefable')).toBeTruthy();
    expect(queryByText('#54 - psyduck')).toBeFalsy();
  });

  it('Load less should be disabled when theres only 18 cards', async () => {
    renderWithRouter(<PokemonCards />);
    
    expect(queryByText('#1 - bulbasaur')).toBeTruthy();
    expect(queryByText('#18 - pidgeot')).toBeTruthy();
    expect(queryByText('#19 - ratatta')).toBeFalsy();
    
    userEvent.click(getByText('Load Less'));
    await waitForElement(() => queryByText('#18 - pidgeot'));
    
    expect(queryByText('#1 - bulbasaur')).toBeTruthy();
    expect(queryByText('#18 - pidgeot')).toBeTruthy();
    expect(queryByText('#19 - ratatta')).toBeFalsy();
  })

  it('Should load less cards when the button is clicked', async () => {
    renderWithRouter(<PokemonCards />);
    
    expect(queryByText('#1 - bulbasaur')).toBeTruthy();
    expect(queryByText('#18 - pidgeot')).toBeTruthy();
    expect(queryByText('#19 - ratatta')).toBeFalsy();
    
    userEvent.click(getByText('Load More'));
    await waitForElement(() => getByText('#19 - ratatta'));
    
    expect(queryByText('#19 - ratatta')).toBeTruthy();
    expect(queryByText('#36 - clefable')).toBeFalsy();
    
    userEvent.click(getByText('Load Less'));
    await waitForElement(() => queryByText('#18 - pidgeot'));
    
    expect(queryByText('#1 - bulbasaur')).toBeTruthy();
    expect(queryByText('#18 - pidgeot')).toBeTruthy();
    expect(queryByText('#19 - ratatta')).toBeFalsy();
  })

    it('should show the details of the clicked card', async () => {
    renderWithRouter(<PokemonCards />);

    const card = screen.getByRole('link', { name: /bulbasaur/});

    userEvent.click(card);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/1');

    });
});
