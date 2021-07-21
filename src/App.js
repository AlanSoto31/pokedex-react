import React, { useEffect, useState } from 'react';

const App = () => {
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

  const names = pokemonsList.map( item => (
    <li key={item.name}>{item.name}</li>
  ))

  const typesNameArr = pokemonsList.map( pokemon => {
    const typesName = JSON.parse(pokemon.types).map( typesArrPerPokemon => typesArrPerPokemon.type.name)
    return typesName
  })

  console.log(typesNameArr)

  const types = typesNameArr.map( item => (
    <li key={Math.random()}><span>{item[0]}</span><span> | </span><span>{item[1]}</span></li>
  )) 

  const abilitiesNameArr = pokemonsList.map( pokemon => {
    const abilitiesName = JSON.parse(pokemon.abilities).map( abilitiesArrPerPokemon => abilitiesArrPerPokemon.ability.name)
    return abilitiesName 
  })

  const abilities = abilitiesNameArr.map( item => (
    <li key={Math.random()}><span>{item[0]}</span><span> | </span><span>{item[1]}</span></li>
  )) 

  return (
    <>
      <ul>
      <h1>Names</h1>
         {names}
      </ul>
      <ul>
      <h1>Abilities</h1>
         {abilities}
      </ul>
      <ul>
      <h1>Types</h1>
         {types}
      </ul>
    </>
  );
}

export default App;
