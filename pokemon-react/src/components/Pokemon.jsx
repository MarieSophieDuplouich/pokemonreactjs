import { useEffect, useState } from 'react';

export default function Pokemon({pokemons,className}) {


  return (
    <div className="pokemon">
      <div key={pokemons.id} className={`pokemon-card ${className ? className : ''}`}>
        <p>{pokemons.pokedexId}</p>
        <h3>{pokemons.name}</h3>
        <img className="pokemon-image"src={pokemons.image} alt={pokemons.name} />
      </div>
    </div>
  );


}

