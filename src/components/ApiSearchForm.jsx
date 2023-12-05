// Form component
// Grabs a Pokemon name from user input
// Makes a fetch request on submit
// Return data

import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiProvider";

export function ApiSearchForm() {
  let apiUrlBase = useContext(ApiContext);
  let [searchData, setSearchData] = useState("");

  const searchForPokemon = async () => {
    let response = await fetch(apiUrlBase + "pokemon/" + searchData);
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
