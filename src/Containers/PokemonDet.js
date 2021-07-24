/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PokemonList from './PokemonList';

const initialState = {"img_url_1": "", "name": "default", description: "", weight: ""}

const PokemonDet = () => {
  const { id } = useParams();
  const pokemonsList = useSelector((state) => state.pokemons.list);
  //console.log(pokemonList);
  const pokemonDet = pokemonsList.length > 0 ? pokemonsList.find((pokemon) => pokemon.id === parseInt(id, 10)) : initialState;
  // console.log(initialState);

  const [temp, setTemp] = useState(pokemonDet);

  useEffect(() => {
    console.log(temp);
    // console.log(temp ? true : false);
    
    if(pokemonsList.length > 0) localStorage.setItem("pokemon", JSON.stringify(temp))
    else {
      const pokemon = JSON.parse(localStorage.getItem("pokemon"));
      console.log(pokemon);
      setTemp(pokemon);
    }

    // pokemonsList.length > 0 && localStorage.setItem("pokemon", JSON.stringify(temp));
  }, []);

  const typesArr = !pokemonDet ? JSON.parse(pokemonDet.types) : []
  const types = typesArr.map((type, index) => (
    index === 0 ? <span key={Math.random()}>{type.type.name}</span> : (
      <span key={Math.random()}>
        <span className="p-2">|</span>
        {type.type.name}
      </span>
    )
  ));

  const abilitiesArr = !pokemonDet ? JSON.parse(pokemonDet.abilities) : [];
  const abilities = abilitiesArr ? abilitiesArr.map((ability, index) => (
    index === 0 ? <span key={Math.random()}>{ability.ability.name}</span> : (
      <span key={Math.random()}>
        <span className="p-2">|</span>
        {ability.ability.name}
      </span>
    )
  )) : []

  const evolutionsArr = !pokemonDet ? JSON.parse(pokemonDet.evolutions) : [];
  const evolutions = evolutionsArr ? evolutionsArr.map((evo, index) => {
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
  }) : []

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
                  {/* {types} */}
                </Card.Text>
                <Card.Text>
                  <span className="card-tags">Abilities:</span>
                  {/* {abilities} */}
                </Card.Text>
                <div className="text-center mt-4">
                  {/* {evolutions} */}
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
