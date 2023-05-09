import React from "react";

function Table(props) {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Stat</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Type</th>
            <td className="Capitalise">
              {props.pokemon.type}{" "}
              <img
                src={props.pokemon.typeImg}
                className="TypeImage"
                alt="Pokemon Type"
                style={{ width: "40px" }}
              ></img>
            </td>
          </tr>
          <tr>
            <th scope="row">
              HP
              <img
                src="https://cdn1.iconfinder.com/data/icons/steaming-gaming-1/80/HP-rpg-HitPoint-HealthPoint-flask-512.png"
                alt="HP"
                style={{ width: "40px" }}
              ></img>
            </th>
            <td>{props.pokemon.hp}</td>
          </tr>
          <tr>
            <th scope="row">
              Attack
              <img
                src="https://us.123rf.com/450wm/martialred/martialred2109/martialred210900036/174888695-slashing-attack-with-a-sword-flat-vector-icon-for-games-and-websites.jpg?ver=6"
                alt="Attack"
                style={{ width: "40px" }}
              ></img>
            </th>
            <td>{props.pokemon.attack}</td>
          </tr>
          <tr>
            <th scope="row">
              Defense
              <img
                src="https://cdn4.iconfinder.com/data/icons/game-ui-2-filled-line/64/shield_defense_security_game_safety_protection-512.png"
                alt="Defense"
                style={{ width: "40px" }}
              ></img>
            </th>
            <td>{props.pokemon.defense}</td>
          </tr>

          {/* <tr>
            <th scope="row">Image</th>
            <td>
              <img src={props.pokemon.pokeImage} alt="Pokemon Type"></img>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
