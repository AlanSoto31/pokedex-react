export const displayPokemons = (pokemons) => ({
  type: 'DISPLAY_POKEMONS',
  payload: pokemons,
});

export const setLoading = (val) => ({
  type: 'SET_LOADING',
  payload: val,
});

export const showError = (e) => ({
  type: 'SHOW_ERROR',
  payload: `Something went wrong loading game list component${e}`,
});

export const fetchPokemonList = () => async (dispatch) => {
  try {
    const pokemons = await fetch('http://localhos:3000/pokemons').then((res) => res.json());
    dispatch(setLoading(true));
    dispatch(displayPokemons(pokemons.data));
  } catch (e) {
    dispatch(showError(e));
  }
};
