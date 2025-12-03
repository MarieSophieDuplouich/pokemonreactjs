import Pokemon from "./Pokemon"
import { useEffect, useState } from 'react'

export default function PokemonList({pokemons}) {


  return (
   <>
     
      <div className="pokemon-list">
      {pokemons.map(pokemons => (
       
          <Pokemon key={pokemons.id} pokemons={pokemons}/>

      ) )}
      </div>
   
   
   </>
  );


}

  