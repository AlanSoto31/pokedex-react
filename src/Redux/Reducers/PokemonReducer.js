const defaultState = {
  loading: false,
  list: [],
  error: null,
};

const PokemonReducer = (state = defaultState, { type, payload }) => {
  let newState;
  switch (type) {
    case 'DISPLAY_POKEMONS':
      newState = { ...state, list: payload };
      return newState;
    case 'SET_LOADING':
      newState = { ...state, loading: payload };
      return newState;
    case 'SHOW_ERROR':
      newState = { ...state, error: payload };
      return newState;
    default:
      return state;
  }
};

export default PokemonReducer;
