import { useEffect, useState } from 'react';

export default function SearchBar(pokemons) {
    //points d'attaque filtre pokemon
  const [rangeAttack, onrangeAttack] = useState('');
   //pokemon recherche par points d'attaque suite
const filteredPokemons = pokemons.filter(poke => {
  if(!rangeAttack) return true;
   
  return parseInt(poke.stats.attack) >= parseInt(rangeAttack);
});
 //pokemon recherche par points d'attaque suite fin


  return (
    <div className="SearchBar">


      <form>
        <input type="number"
          value={rangeAttack} placeholder="filtrer par points d'attaque"
          onChange={(e) => onrangeAttack(e.target.value)} />
      </form>
       


   {filteredPokemons.length === 0 && (
    <p>Aucun Pokémon ne correspond à ce filtre.</p>
   )}

    </div>
  ) ;

 
}




