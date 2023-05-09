import React from "react";
import Table from "./Table";

function Card(props) {
  return (
    <div className="Center">
      <img src={props.pokemon.img} alt={props.pokemon.name} />
      <h1>{props.pokemon.name}</h1>
      <Table pokemon={props.pokemon} />
    </div>
  );
}

export default Card;
