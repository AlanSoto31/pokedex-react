import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pokemon from '../Components/Pokemon';
import { fetchPokemonList } from '../Redux/Actions/index';
import PaginationC from '../Components/PaginationC';
import Filter from '../Components/Filter';

const PokemonList = () => {
  const pokemonsList = useSelector((state) => state.pokemons.list);
  const error = useSelector((state) => state.pokemons.error);
  const loading = useSelector((state) => state.pokemons.loading);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [typ, setTyp] = useState('ALL');

  useEffect(() => {
    dispatch(fetchPokemonList(offset));
  }, [offset]);

  const typesArr = pokemonsList.map((pokemon) => {
    const typesName = JSON.parse(pokemon.types).map(
      (typesArrPerPokemon) => typesArrPerPokemon.type.name,
    );
    return typesName;
  });

  const handleChangeFilter = (value) => {
    setTyp(value);
  };

  const check = (pokemon) => {
    let r;
    const platTrue = JSON.parse(pokemon.types).filter((type) => type.type.name === typ || typ === 'ALL');
    if (platTrue.length) r = pokemon;
    return r;
  };

  const names = pokemonsList.filter(check).map(
    (pokemon) => <Pokemon key={pokemon.name} pokemon={pokemon} />,
  );

  const increment = () => {
    if (offset <= 48) {
      const newOffset = offset + 6;
      const newPage = page + 1;
      setOffset(newOffset);
      setPage(newPage);
    }
  };

  const decrement = () => {
    if (offset !== 0) {
      const newOffset = offset - 6;
      const newPage = page - 1;
      setOffset(newOffset);
      setPage(newPage);
    }
  };

  if (!error) {
    return (
      <>
        <Container className="mt-4">
          { loading ? (
            <div className="d-flex justify-content-between align-content-center">
              <PaginationC increment={increment} decrement={decrement} page={page} />
              <Filter types={typesArr} onChangeFilter={handleChangeFilter} />
            </div>
          ) : '' }
          <Row className="g-4">
            { loading ? names : (
              <Col className="d-flex justify-content-center spinner">
                <Spinner
                  animation="border"
                  role="status"
                />
              </Col>
            ) }
          </Row>
        </Container>
      </>
    );
  }
  return <h1 className="mt-5 d-flex justify-content-center">{error}</h1>;
};

export default PokemonList;
