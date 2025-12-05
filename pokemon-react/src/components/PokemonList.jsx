import Pokemon from "./Pokemon"
import { useEffect, useState } from 'react'

export default function PokemonList({ pokemons, setPokemon }) {


  return (
    <>
      <div className="pokemon-list" id="pokemon-list-mobile">
        {pokemons.map(poke => (
          <div key={poke.id} onClick={() => setPokemon(poke)}>
            <Pokemon pokemons={poke} />
          </div>

        ))}
      </div>

    </>
  );


}

