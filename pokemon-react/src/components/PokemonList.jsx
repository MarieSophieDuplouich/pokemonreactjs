import Pokemon from "./Pokemon"
import { useEffect, useState } from 'react'

export default function PokemonList({ pokemons, setPokemon }) {

function myFunction() {
  const hiddenlist = document.getElementById("pokemon-list-mobile");
  if (hiddenlist.style.display === "block") {
    hiddenlist.style.display = "none";
  } else {
    hiddenlist.style.display = "block";
  }
}




  return (
    <>

      <div class="topnav">
        <a href="#home" class="active">Logo</a>
        <div id="pokemon-list-mobile">
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          ☰</a>
      </div>


      <div className="pokemon-list" >
        {pokemons.map(poke => (
          <div key={poke.id} onClick={() => setPokemon(poke)}>
            <Pokemon pokemons={poke} />
          </div>

        ))}
      </div>




    </>
  );


}

