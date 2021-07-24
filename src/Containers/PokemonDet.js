import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Info from '../Components/Info';

const initialState = {
  img_url_1: '', name: '', description: '', weight: '', types: '[]', abilities: '[]', evolutions: '[]',
};

const PokemonDet = () => {
  const { id } = useParams();
  const pokemonsList = useSelector((state) => state.pokemons.list);
  const pokemonDet = pokemonsList.length > 0
    ? pokemonsList.find((pokemon) => pokemon.id === parseInt(id, 10)) : initialState;

  const [temp, setTemp] = useState(pokemonDet);

  useEffect(() => {
    if (pokemonsList.length > 0) localStorage.setItem('pokemon', JSON.stringify(temp));
    else {
      const pokemon = JSON.parse(localStorage.getItem('pokemon'));
      setTemp(pokemon);
    }
  }, []);

  const parseInfo = (str) => {
    const jas = JSON.parse(str);
    return jas;
  };

  const renderTypes = () => {
    const typesArr = parseInfo(temp.types);
    return typesArr.map((type, index) => (
      <Info key={type.type.name} data={type.type.name} index={index} />
    ));
  };

  const renderAbilities = () => {
    const abilitiesArr = parseInfo(temp.abilities);
    return abilitiesArr.map((ability, index) => (
      <Info key={ability.ability.name} data={ability.ability.name} index={index} />
    ));
  };

  const evolutionsArr = parseInfo(temp.evolutions);
  const evolutions = evolutionsArr.map((evo, index) => {
    let evoNameMatch = '';
    if (evo === temp.name) {
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
              <Card.Img variant="top" src={temp.img_url_1} />
            </Col>
            <Col md={8}>
              <div className="cardDetailTitle text-center mt-4">{temp.name}</div>
              <Card.Body>
                <Card.Text>
                  <span className="card-tags">Description:</span>
                  {temp.description}
                </Card.Text>
                <Card.Text>
                  <span className="card-tags">Weight:</span>
                  <span>
                    {temp.weight}
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
