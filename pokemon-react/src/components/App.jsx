import { useEffect, useState } from 'react'
import './App.css'
import Pokemon from './Pokemon';
// import Searchbar from './SearchBar'
import PokemonDetail from './PokemonDetail'
// import PokemonEvolution from './PokemonEvolution'
import PokemonList from './PokemonList'

export function App({ pokemons }) {

     //currentPokemon = valeur de départ/constante
    // setPokemon = setter

  const [currentPokemon,setPokemon]= useState(pokemons[0]);

//  const evolution = [{apiEvolutions}];
 {/* //amélioré leconst de l'évolution ici mettre evolution = {evolution} avec currentpokemeonpok */}



  return (
    < div className="app">
      <PokemonList pokemons={pokemons} setPokemon={setPokemon}/>

      <div className="container">
        <PokemonDetail currentPokemon={currentPokemon} />
        {/*
     <Searchbar/>
     <PokemonDetail/>
   */}

      </div>
    </div>
  )
}

export default App
