import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PokemonDet = () => {
  const { id } = useParams();
  const pokemonsList = useSelector((state) => state.pokemons.list);

  const pokemonDet = pokemonsList.find((pokemon) => pokemon.id === parseInt(id, 10));
  // console.log(pokemonDet);

  return (
    <div>
      {`This is ${pokemonDet.name}`}
    </div>
  );
};

export default PokemonDet;
