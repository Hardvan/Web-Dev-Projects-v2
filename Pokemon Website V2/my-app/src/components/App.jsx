import React, { useState } from "react";
import Axios from "axios";
import Display from "./Display";
import Footer from "./Footer";
import "../styles.css";
import getTypeImage from "../getTypeImage";

function App() {
  const [pokeName, setPokeName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
    typeImg: "",
  });
  const [error404, setError404] = useState(false); // TODO: display 404 message

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  // API call
  function searchPokemon() {
    try {
      Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}` // Lowercase for API Call
      ).then((response) => {
        // console.log(response); // Seeing the data

        setPokemon({
          name: toTitleCase(pokeName), // Title Case for Displaying
          species: response.data.species,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
          typeImg: getTypeImage(response.data.types[0].type.name),
        });
        setPokemonChosen(true);
        setPokeName(""); // Clearing entry field
      });
    } catch (error) {
      setError404(true);
    }
  }

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>PokeStats</h1>
        <input
          onChange={(event) => {
            setPokeName(event.target.value);
          }}
          type="text"
          value={pokeName}
        />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <Display pokemonChosen={pokemonChosen} pokemon={pokemon} />
      <Footer pokemonChosen />
    </div>
  );
}

export default App;
