// Display title and image of Pokemon data
// Data comes from props

import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { PokemonTeamContext } from "../contexts/PokemonDataProvider";

export default function PokemonInfoCard(props) {
  let { team, setTeam } = useContext(PokemonTeamContext);

  const deletePokemonFromTeam = (providedId) => {
    // Find and delete pokemon with matching id
    let teamCopy = JSON.parse(JSON.stringify(team));
    teamCopy = teamCopy.filter((obj) => {
      return obj.id !== providedId;
    });

    // Set the updated team to context
    setTeam(teamCopy);
  };

  return (
    <Card className="pokemonInfoCard">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Img
          src={props.imageUrl}
          alt="Default front sprite from PokeAPI"
        />
        <Button
          onClick={(event) => deletePokemonFromTeam(props.pokemonId)}
          variant="outline-primary"
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
