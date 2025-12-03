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
  const [currentPokemon,setPokemon]= useState([0]);
   const evolution = [{apiEvolutions}];

  // console.log(pokemons);
  // const bulbizarre = pokemons[0];
  // console.log(bulbizarre);
  // useEffect(() => {

  // }, []);



  return (
    < div className="app">
      <PokemonList pokemons={pokemons} />

      <div className="container">
        <PokemonDetail pokemon={currentPokemon} evolution = {evolution}/>
        {/*
     <Searchbar/>
     <PokemonDetail/>
     <PokemonEvolution/> */}

      </div>
    </div>
  )
}

export default App
