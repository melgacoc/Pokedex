import React from 'react';
import { waitForElement } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import PokemonCards from '../componenrs/pokeCard';


describe('Tests for PokemonCards component', () => {
  it('should load more cards when the button is clicked', async () => {
    renderWithRouter(<PokemonCards />);
    
    expect(queryByText('#1 - Bulbasaur')).toBeTruthy();
    expect(queryByText('#18 - Pidgeot')).toBeTruthy();
    expect(queryByText('#19 - Ratatta')).toBeFalsy();
    
    userEvent.click(getByText('Load More'));
    await waitForElement(() => getByText('#19 - Ratatta'));
    
    expect(queryByText('#19 - Ratatta')).toBeTruthy();
    expect(queryByText('#36 - Clefable')).toBeFalsy();
    
    userEvent.click(getByText('Load More'));
    await waitForElement(() => getByText('#36 - Clefable'));
    
    expect(queryByText('#36 - Clefable')).toBeTruthy();
    expect(queryByText('#54 - Psyduck')).toBeFalsy();
  });

  it('Load less should be disabled when theres only 18 cards', async () => {
    renderWithRouter(<PokemonCards />);
    
    expect(queryByText('#1 - Bulbasaur')).toBeTruthy();
    expect(queryByText('#18 - Pidgeot')).toBeTruthy();
    expect(queryByText('#19 - Ratatta')).toBeFalsy();
    
    userEvent.click(getByText('Load Less'));
    await waitForElement(() => queryByText('#18 - Pidgeot'));
    
    expect(queryByText('#1 - Bulbasaur')).toBeTruthy();
    expect(queryByText('#18 - Pidgeot')).toBeTruthy();
    expect(queryByText('#19 - Ratatta')).toBeFalsy();
  })

  it('Should load less cards when the button is clicked', async () => {
    renderWithRouter(<PokemonCards />);
    
    expect(queryByText('#1 - Bulbasaur')).toBeTruthy();
    expect(queryByText('#18 - Pidgeot')).toBeTruthy();
    expect(queryByText('#19 - Ratatta')).toBeFalsy();
    
    userEvent.click(getByText('Load More'));
    await waitForElement(() => getByText('#19 - Ratatta'));
    
    expect(queryByText('#19 - Ratatta')).toBeTruthy();
    expect(queryByText('#36 - Clefable')).toBeFalsy();
    
    userEvent.click(getByText('Load Less'));
    await waitForElement(() => queryByText('#18 - Pidgeot'));
    
    expect(queryByText('#1 - Bulbasaur')).toBeTruthy();
    expect(queryByText('#18 - Pidgeot')).toBeTruthy();
    expect(queryByText('#19 - Ratatta')).toBeFalsy();
  });
});
