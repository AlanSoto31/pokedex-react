import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pokemon from '../Components/Pokemon';
import { fetchPokemonList } from '../Redux/Actions/index';

const PokemonList = () => {
  const pokemonsList = useSelector((state) => state.pokemons.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  const names = pokemonsList.map((pokemon) => (
    <Pokemon key={pokemon.name} pokemon={pokemon} />
  ));

  return (
    <>
      <ul>
        <h1>Names</h1>
        {names}
      </ul>
    </>
  );
};

export default PokemonList;
