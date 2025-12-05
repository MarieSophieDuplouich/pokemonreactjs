import { useState } from 'react';


export default function SearchBar({ pokemons, onPokemonFound }) {
  // id filtre pokemon
  const [searchPokemon, setsearchPokemon] = useState('');


  //pokemon recherche par id ou par name
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const searchValue = formData.get('searchInput');
    setsearchPokemon(searchValue);
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + searchValue).then(res => res.json())
      .then(pokemon => {
        onPokemonFound(pokemon)
      })
  };

  const filteredPokemons = pokemons.filter(poke => {
    if (!searchPokemon) return true;


    const lower = searchPokemon.toLowerCase();



    //Filtrer par id
    const findId = String(poke.pokedexId).includes(lower);

    //Filter par nom/name du pokémon

    const findName = poke.name.toLowerCase().includes(lower);

    return findId || findName;


  });
  //pokemon recherche par id ou name fin faire searchbar avec formdata et onsubmit


  return (
    <div className="SearchBar">


      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput">
          <span className="mglass">&#9906;</span></label>

        <input id="searchInput" name="searchInput" type="text"
          placeholder="filtrer par Id ou filter par nom" />
      </form>

    </div>
  );


}


