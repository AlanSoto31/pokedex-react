import React, { useEffect, useState } from 'react';

const App = () => {
  const [pokemonsList, setPokemonsList] = useState(
    [
      {
          "id": 1,
          "name": "\"bulbasaur\"",
          "img_url": null,
          "types": null,
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
          "types": null,
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

  pokemonsList.map( item => (
    console.log(item.name)
  ))

  return (
    <h1>Hello</h1>
  );
}

export default App;
