import React from 'react'
import { Link } from 'react-router-dom';

const Pokemon = ({pokemon}) => {
    return (
        <li>
            <Link to={`/${pokemon.id}`}>
                {pokemon.name}
            </Link>
        </li>
    )
}

export default Pokemon
