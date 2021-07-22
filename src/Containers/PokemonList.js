import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pokemon from '../Components/Pokemon';
import { fetchPokemonList } from '../Redux/Actions/index';

const PokemonList = () => {
  const pokemonsList = useSelector((state) => state.pokemons.list);
  const error = useSelector((state) => state.pokemons.error);
  const loading = useSelector((state) => state.pokemons.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  const names = pokemonsList.map(
    (pokemon) => <Pokemon key={pokemon.name} pokemon={pokemon} />,
  );

  if (!error) {
    return (
      <>
        <Container className="mt-4">
          <h1>Names</h1>
          <Row className="g-4">
            <ul>
              { loading ? names : (
                <Col className="d-flex justify-content-center spinner">
                  <Spinner
                    animation="border"
                    role="status"
                  />
                </Col>
              ) }
            </ul>
          </Row>
        </Container>
      </>
    );
  }
  return <h1 className="mt-5 d-flex justify-content-center">{error}</h1>;
};

export default PokemonList;
