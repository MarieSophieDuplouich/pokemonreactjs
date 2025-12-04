import { useEffect, useState } from 'react';

export default function SearchBar({pokemons }) {
    // id filtre pokemon
  const [searchPokemon, onsearchPokemon] = useState('');
   //pokemon recherche par id 

   const filteredPokemons = pokemons.filter(poke => {
  if(!searchPokemon) return true;
   
   if(!isNaN(searchPokemon)) {
  return parseInt(poke.pokedexId) >= parseInt(searchPokemon);
   }

   return poke.name.toLowerCase().includes(searchTerm.toLowercase());

});
 //pokemon recherche par id ou name fin


  return (
    <div className="SearchBar">


      <form>
        <label htmlFor="searchInput"><span className="mglass">&#9906;</span></label>
        <input id="searchInput" type="text"
          value={searchPokemon} placeholder="filtrer par Id ou filter par nom"
          onChange={(e) => onsearchPokemon(e.target.value)} />
      </form>
       


   {filteredPokemons.length === 0 && (
    <p>Aucun Pokémon ne correspond à ce filtre.</p>
   )}

    </div>
  ) ;

 
}


