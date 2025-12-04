import { useEffect, useState } from 'react'
import './App.css'
import Pokemon from './Pokemon';
import SearchBar from './SearchBar'
import PokemonDetail from './PokemonDetail'
import PokemonList from './PokemonList'

export function App({ pokemons }) {

  //currentPokemon = valeur de départ/constante
  // setPokemon = setter

  const [currentPokemon, setPokemon] = useState(pokemons[0]);
   useEffect(()=>{
    // on app load
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    .then(res=>{
      if(!res.ok){
        throw "Error serveur"
      }
      return res.json();
    })
    .then(pokemons_arr=>{
      // !
      setPokemons(pokemons_arr);
      setCurrentPokemon(pokemons_arr[0]);
    })
  },[])
  //  const evolution = [{apiEvolutions}];
  {/* //amélioré leconst de l'évolution ici mettre evolution = {evolution} avec currentpokemeonpok */ }



  return (
    < div className="app">
      <PokemonList pokemons={pokemons} setPokemon={setPokemon} />
      <div className="container">
          <SearchBar pokemons={pokemons} onPokemonFound={(pokemon)=>setPokemon(pokemon)} />
        <PokemonDetail currentPokemon={currentPokemon} />
      </div>
    </div>
  )
}

export default App
