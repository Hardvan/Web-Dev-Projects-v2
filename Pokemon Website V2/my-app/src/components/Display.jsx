import React from "react";
import Card from "./Card";

function Display(props) {
  return (
    <div className="DisplaySection">
      {!props.pokemonChosen ? (
        <h1>Search for a Pokemon</h1>
      ) : (
        <Card pokemon={props.pokemon} />
      )}
    </div>
  );
}

export default Display;
