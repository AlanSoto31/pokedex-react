import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PokemonDet = () => {
  const { id } = useParams();
  const pokemonsList = useSelector((state) => state.pokemons.list);

  const pokemonDet = pokemonsList.find((pokemon) => pokemon.id === parseInt(id, 10));

  const typesArr = JSON.parse(pokemonDet.types);
  const types = typesArr.map((type, index) => (
    index === 0 ? <span key={Math.random()}>{type.type.name}</span> : (
      <span key={Math.random()}>
        <span className="p-2">|</span>
        {type.type.name}
      </span>
    )
  ));

  const abilitiesArr = JSON.parse(pokemonDet.abilities);
  const abilities = abilitiesArr.map((ability, index) => (
    index === 0 ? <span key={Math.random()}>{ability.ability.name}</span> : (
      <span key={Math.random()}>
        <span className="p-2">|</span>
        {ability.ability.name}
      </span>
    )
  ));

  const evolutionsArr = JSON.parse(pokemonDet.evolutions);
  const evolutions = evolutionsArr.map((evo, index) => {
    let evoNameMatch = '';
    if (evo === pokemonDet.name) {
      evoNameMatch = 'evoNameMatch';
    }

    return (index === 0 ? <span key={Math.random()} className={`evoNames ${evoNameMatch}`}>{evo}</span> : (
      <span key={Math.random()} className={`evoNames ${evoNameMatch}`}>
        <span className="p-4">&gt;&gt;</span>
        {evo}
      </span>
    ));
  });

  return (
    <>
      <Container>
        <Card className="mb-3 mt-5">
          <Row className="g-0">
            <Col md={4}>
              <Card.Img variant="top" src={pokemonDet.img_url_1} />
            </Col>
            <Col md={8}>
              <div className="cardDetailTitle text-center mt-4">{pokemonDet.name}</div>
              <Card.Body>
                <Card.Text>
                  <span className="card-tags">Description:</span>
                  {pokemonDet.description}
                </Card.Text>
                <Card.Text>
                  <span className="card-tags">Weight:</span>
                  <span>
                    {pokemonDet.weight}
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
                <div className="text-center mt-4">
                  {evolutions}
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default PokemonDet;
