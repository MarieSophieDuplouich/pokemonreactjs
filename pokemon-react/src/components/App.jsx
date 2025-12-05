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
    
    //evolution pokemon
  
  const [evolution,setEvolution ]= useState([]);


useEffect(() => {
  // si pas d'évolution → on vide le state
  if (!currentPokemon.apiEvolutions || currentPokemon.apiEvolutions.length === 0) {
    setEvolution([]);
    return;
  }

  // récupérer les pokedexId des évolutions
  const ids = currentPokemon.apiEvolutions.map(evolution => evolution.pokedexId);

  // fetch pour chaque id
  Promise.all(
    ids.map(id =>
      fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        .then(res => {
          if (!res.ok) throw "Erreur serveur évolution";
          return res.json();
        })
    )
  )
    .then(results => {
      setEvolution(results); // mettre toutes les infos dans le state
    })
    .catch(err => console.error(err));

}, [currentPokemon]);



  return (
    < div className="app">
      <PokemonList pokemons={pokemons} setPokemon={setPokemon} />
      <div className="container">
          <SearchBar pokemons={pokemons} onPokemonFound={(pokemon)=>setPokemon(pokemon)} />
        <PokemonDetail currentPokemon={currentPokemon} evolution={evolution} setPokemon={setPokemon}/>
      </div>
    </div>
  )
}

export default App
