import React, { useEffect, useState } from 'react';
import Pokemon from '../Components/Pokemon'

const PokemonList = () => {
    const [pokemonsList, setPokemonsList] = useState(
        [
          {
              "id": 1,
              "name": "\"bulbasaur\"",
              "img_url": null,
              "types": "[{\"slot\":1,\"type\":{\"name\":\"grass\",\"url\":\"https://pokeapi.co/api/v2/type/12/\"}},{\"slot\":2,\"type\":{\"name\":\"poison\",\"url\":\"https://pokeapi.co/api/v2/type/4/\"}}]",
              "weight": null,
              "abilities": "[{\"ability\":{\"name\":\"default\",\"url\":\"https://pokeapi.co/api/v2/ability/65/\"},\"is_hidden\":false,\"slot\":1},{\"ability\":{\"name\":\"default\",\"url\":\"https://pokeapi.co/api/v2/ability/34/\"},\"is_hidden\":true,\"slot\":3}]",
              "description": null,
              "evolutions": null,
              "created_at": "2021-07-21T17:12:34.636Z",
              "updated_at": "2021-07-21T17:12:34.636Z"
          },
          {
              "id": 2,
              "name": "\"ivysaur\"",
              "img_url": null,
              "types": "[{\"slot\":1,\"type\":{\"name\":\"grass\",\"url\":\"https://pokeapi.co/api/v2/type/12/\"}},{\"slot\":2,\"type\":{\"name\":\"poison\",\"url\":\"https://pokeapi.co/api/v2/type/4/\"}}]",
              "weight": null,
              "abilities": "[{\"ability\":{\"name\":\"default\",\"url\":\"https://pokeapi.co/api/v2/ability/65/\"},\"is_hidden\":false,\"slot\":1},{\"ability\":{\"name\":\"default\",\"url\":\"https://pokeapi.co/api/v2/ability/34/\"},\"is_hidden\":true,\"slot\":3}]",
              "description": null,
              "evolutions": null,
              "created_at": "2021-07-21T17:12:34.756Z",
              "updated_at": "2021-07-21T17:12:34.756Z"
          }
      ]
    );
    
      const fetchData = async () => {
        const res = await fetch('http://localhost:3000/pokemons')
        const data = await res.json()
        setPokemonsList(data.data)
      }
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const names = pokemonsList.map( pokemon => (
        <Pokemon key={pokemon.name} pokemon={pokemon}></Pokemon>
      ))
    
      return (
        <>
          <ul>
          <h1>Names</h1>
             {names}
          </ul>
        </>
      );
}

export default PokemonList

