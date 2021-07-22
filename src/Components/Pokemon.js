import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemon }) => (
  <li>
    <Link to={`/${pokemon.id}`}>
      {pokemon.name}
    </Link>
  </li>
);

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    name: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
