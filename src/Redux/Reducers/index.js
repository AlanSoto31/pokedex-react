import { combineReducers } from 'redux';
import PokemonReducer from './PokemonReducer';

const rootReducer = combineReducers({
  pokemons: PokemonReducer,
});

export default rootReducer;
