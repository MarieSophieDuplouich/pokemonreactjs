


    <div className="pokemon-list">
        {filteredPokemons.map(poke => (
          <div key={poke.id} className="pokemon-card">
            <h3>{poke.name}</h3>
            <img src={poke.image} alt={poke.name} />
            <p>ID : {poke.pokedexId}</p>
            <p>points d'attaque : {poke.stats.attack}</p>
            <p>ça se passe ci-dessous le filtrage </p>
          </div>
        ))}
      </div>
