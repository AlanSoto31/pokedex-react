import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Pokemon = ({ pokemon }) => {
  const typesString = JSON.parse(pokemon.types);
  const types = typesString.map((type, index) => (
    index === 0 ? <span key={Math.random()}>{type.type.name}</span> : (
      <span key={Math.random()}>
        <span className="p-2">|</span>
        {type.type.name}
      </span>
    )
  ));

  const abilitiesString = JSON.parse(pokemon.abilities);
  const abilities = abilitiesString.map((ability, index) => (
    index === 0 ? <span key={Math.random()}>{ability.ability.name}</span> : (
      <span key={Math.random()}>
        <span className="p-2">|</span>
        {ability.ability.name}
      </span>
    )
  ));

  return (
    <Col sm={12} md={6} lg={4} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" className="pokemonList-card-img" src={pokemon.img_url_1} />
        <Card.Title className="font-weight-bold text-center my-4">
          <Link className="card-title cardTitle" to={`/${pokemon.id}`}>
            {pokemon.name}
          </Link>
        </Card.Title>
        <Card.Body className="d-flex flex-column justify-content-end ">
          <Card.Text>
            <span className="card-tags">Weight:</span>
            <span>
              {pokemon.weight}
              {' '}
              kg
            </span>
          </Card.Text>
          <Card.Text>
            <span className="card-tags">Type:</span>
            {types}
          </Card.Text>
          <Card.Text>
            <span className="card-tags">Abilities:</span>
            {abilities}
          </Card.Text>

        </Card.Body>
      </Card>
    </Col>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    name: PropTypes.string,
    img_url_1: PropTypes.string,
    types: PropTypes.string,
    weight: PropTypes.string,
    abilities: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
