import Pokemon from "./Pokemon"
import { useEffect, useState } from 'react'
import './Pokemon-detail.css'

export default function PokemonDetail({ currentPokemon }) {

  return (
    <>


      <div className="pokemon-detail"  >



        <Pokemon pokemons={currentPokemon} />

        <div className="types-container">
          <h4 className="title-types">Types</h4>
          <div className="types-container-images">
            {currentPokemon.apiTypes.map(type =>

            (<img key={type.name} src={type.image} alt={type.name} />
            )
            )

            }
          </div>
        </div>

        <div className="container-evolution">

          {currentPokemon.apiEvolutions.length === 0 && (
            <p>Ce Pokémon n’a pas d’évolution.</p>
          )}

          {currentPokemon.apiEvolutions.map(evolution =>

          (<div> <img key={evolution.name} src={evolution.image} alt={evolution.name} />
            <p>{evolution.pokedexId}</p>
            <p>{evolution.name}</p></div>
          )
          )
// state pour les évo et faire fetch dans composant qui emt à jour useffect


          }

        </div>
      </div>


    </>
  );


}
