import Pokemon from "./Pokemon"
import { useEffect, useState } from 'react'

export default function PokemonDetail({ currentPokemon }) {

  return (
    <>


      <div className="pokemon-detail"  >



        <Pokemon pokemons={currentPokemon} />

        <div className="types-container">
          <h4 className="title-types">Types</h4>
          <div className="types-container-images">
            {currentPokemon.apiTypes.map(type =>

                (  <img key={type.name}src={type.image} alt={type.name} />
                )
            )

            }
          </div>
        </div>

        <div className="container-evolution">
          <Pokemon pokemons={currentPokemon} />
          {/* //mettre l'évolution ici àla place de currentpokemeonjepense */}
        </div>
      </div>


    </>
  );


}
