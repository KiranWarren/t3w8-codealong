// Form component
// Grabs a Pokemon name from user input
// Makes a fetch request on submit
// Return data

import { useContext } from "react";
import { ApiContext } from "../contexts/ApiProvider";

export function ApiSearchForm() {
  let apiUrlBase = useContext(ApiContext);

  const searchForPokemon = () => {
    console.log(`API URL is: ${apiUrlBase}`);
  };

  return (
    <div>
      <h5>Enter a Pokemon name:</h5>
      <input type="text" name="pokemonName" id="pokemonName" />
      <button type="submit" onClick={searchForPokemon}>
        Search
      </button>
    </div>
  );
}
