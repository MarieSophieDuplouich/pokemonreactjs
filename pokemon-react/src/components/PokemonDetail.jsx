import Pokemon from "./Pokemon"
import { useEffect, useState } from 'react'

export default function PokemonDetail({currentPokemon}) {
  // if (!currentPokemon) {
  //   return (
  //     <div className="pokemon-detail">
  //       <p>Sélectionnez un Pokémon dans la liste</p>
  //     </div>
  //   );
  // }


  return (
   <>

     
      <div className="pokemon-detail"  >
                
  
              
                 <Pokemon pokemons={currentPokemon}/>
  
     
      </div>
   
   
   </>
  );


}
