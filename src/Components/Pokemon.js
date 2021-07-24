import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Info from './Info';

const Pokemon = ({ pokemon }) => {
  const parseInfo = (str) => {
    const jas = JSON.parse(str);
    return jas;
  };

  const renderTypes = () => {
    const typesArr = parseInfo(pokemon.types);
    return typesArr.map((type, index) => (
      <Info key={type.type.name} data={type.type.name} index={index} />
    ));
  };

  const renderAbilities = () => {
    const abilitiesArr = parseInfo(pokemon.abilities);
    return abilitiesArr.map((ability, index) => (
      <Info key={ability.ability.name} data={ability.ability.name} index={index} />
    ));
  };

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
            {renderTypes()}
          </Card.Text>
          <Card.Text>
            <span className="card-tags">Abilities:</span>
            {renderAbilities()}
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
