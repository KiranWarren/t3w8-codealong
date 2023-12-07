// Display title and image of Pokemon data
// Data comes from props

import Card from "react-bootstrap/Card";

export default function PokemonInfoCard(props) {
  return (
    <Card className="pokemonInfoCard">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Img
          src={props.imageUrl}
          alt="Default front sprite from PokeAPI"
        />
      </Card.Body>
    </Card>
  );
}
