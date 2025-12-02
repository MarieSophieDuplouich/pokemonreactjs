import { useState } from 'react'
import './App.css'
import Searchbar from './SearchBar'
import PokemonDetail from './PokemonDetail'
import PokemonEvolution from './PokemonEvolution'
import PokemonList from './PokemonList'

export function App() {


  return (
    <>
     <h1>Bienvenue sur Pokemon Api</h1>
    
     <div className="container">
   
     <PokemonList/>
     <Searchbar/>
     <PokemonDetail/>
     <PokemonEvolution/>
     </div>
    </>
  )
}

export default App
