import { useEffect, useState } from 'react';

export default function Pokemon({pokemons}) {


  return (
    <div className="pokemon">
      <div key={pokemons.id} className="pokemon-card">
        <p>{pokemons.pokedexId}</p>
        <h3>{pokemons.name}</h3>
        <img className="pokemon-image"src={pokemons.image} alt={pokemons.name} />
      </div>
    </div>
  );


}

