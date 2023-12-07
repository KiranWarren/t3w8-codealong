// Form component
// Grabs a Pokemon name from user input
// Makes a fetch request on submit
// Return data

import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiProvider";
import { PokemonTeamContext } from "../contexts/PokemonDataProvider";

export function ApiSearchForm() {
  let { url } = useContext(ApiContext);
  let { team, setTeam } = useContext(PokemonTeamContext);
  let [searchData, setSearchData] = useState("");

  const searchForPokemon = async () => {
    let response = await fetch(url + "pokemon/" + searchData);
    let data = await response.json();
    setTeam([...team, data]);
  };

  return (
    <div>
      <h5>Enter a Pokemon name:</h5>
      <input
        type="text"
        name="pokemonName"
        id="pokemonName"
        value={searchData}
        onChange={(event) => setSearchData(event.target.value)}
      />
      <button type="submit" onClick={searchForPokemon}>
        Search
      </button>
    </div>
  );
}
