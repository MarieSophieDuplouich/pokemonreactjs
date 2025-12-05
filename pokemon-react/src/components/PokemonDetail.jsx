import Pokemon from "./Pokemon"
import { useEffect, useState } from 'react'
import './Pokemon-detail.css'

export default function PokemonDetail({ currentPokemon, evolution,setPokemon}) {

  return (
    <>


      <div className="pokemon-detail"  >



        <Pokemon className="pokemon-detail-plus" pokemons={currentPokemon} />
        {/* comment chnager le css de Pokemon pokemon-detail-plus sans sans toucher les autres compenntns Pokemon*/}

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



        <div className="container-evolution-principal">

          {currentPokemon.apiEvolutions.length === 0 && (
            <p className="pasevolution">Ce Pokémon n’a pas d’évolution.</p>
          )} 



          {evolution.map(evolution =>

          (<div 
            key={evolution.pokedexId}
            className="container-evolution" 
          onClick={() => setPokemon(evolution)}
          >
            <p>{evolution.pokedexId}</p>
            <h3>{evolution.name}</h3>
            <img key={evolution.name} src={evolution.image} alt={evolution.name} />

            </div>
          )
          )


          }

        </div>
      </div>


    </>
  );


}
