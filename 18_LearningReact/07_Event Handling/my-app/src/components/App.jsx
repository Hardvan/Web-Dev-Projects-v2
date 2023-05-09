import React, { useState } from "react";

function App() {
  const [name, setName] = useState(""); // For input text
  const [headingText, setHeadingText] = useState(""); // For heading text
  const [isMouseOver, setMouseOver] = useState(false); // For button color change

  function handleClick(event) {
    setHeadingText(name);

    event.preventDefault(); // ? Prevent refreshing of page
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}!</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
