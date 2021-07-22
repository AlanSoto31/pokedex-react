  export const displayPokemons = (pokemons) => ({
    type: 'DISPLAY_POKEMONS',
    payload: pokemons,
  });
  
  export const fetchPokemonList = () => async (dispatch) => {
      const pokemons = await fetch('http://localhost:3000/pokemons').then((res) => res.json());
      dispatch(displayPokemons(pokemons.data));
  };
  