const defaultState = {
  loading: false,
  list: [
    {
      id: 1,
      name: '"bulbasaur"',
      img_url: null,
      types: '[{"slot":1,"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"}},{"slot":2,"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"}}]',
      weight: null,
      abilities: '[{"ability":{"name":"default","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"default","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}]',
      description: null,
      evolutions: '[]',
      created_at: '2021-07-21T17:12:34.636Z',
      updated_at: '2021-07-21T17:12:34.636Z',
    },
    {
      id: 2,
      name: '"ivysaur"',
      img_url: null,
      types: '[{"slot":1,"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"}},{"slot":2,"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"}}]',
      weight: null,
      abilities: '[{"ability":{"name":"default","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"default","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}]',
      description: null,
      evolutions: '[]',
      created_at: '2021-07-21T17:12:34.756Z',
      updated_at: '2021-07-21T17:12:34.756Z',
    },
  ],
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
