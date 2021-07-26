import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pokemon from '../Components/Pokemon';

describe('<Pokemon/>', () => {
  let component;
  const pokemon1 = {
    img_url_1: '', name: 'charmander', description: '', weight: '', types: '[]', abilities: '[]', evolutions: '[]',
  };

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Pokemon pokemon={pokemon1} />
      </BrowserRouter>,
    );
  });

  test('Renders content', () => {
    component.getByText('charmander');
  });
});
