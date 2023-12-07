// Displays an array of PokemonInfoCards

import { useContext, useEffect } from "react";
import { PokemonTeamContext } from "../contexts/PokemonDataProvider";
import PokemonInfoCard from "./PokemonInfoCard";

export default function PokemonTeamDisplay() {
  let { team } = useContext(PokemonTeamContext);

  useEffect(() => {
    console.log("team display re-rendering");
  }, [team]);

  return (
    <div id="pokemonTeam">
      {team.map((element, index) => {
        return (
          <PokemonInfoCard
            key={element.name + index}
            name={element.name}
            imageUrl={element.sprites.other.home.front_default}
          />
        );
      })}
    </div>
  );
}
