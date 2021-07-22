import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDet = () => {
  const { id } = useParams();
  return (
    <div>
      {`This is the pokemon number ${id}`}
    </div>
  );
};

export default PokemonDet;
