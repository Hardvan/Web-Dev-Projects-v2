import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Function to increment count
  function increase() {
    setCount(count + 1);
  }

  // Function to decrement count
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
