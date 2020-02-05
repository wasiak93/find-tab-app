import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  fetch(`https://www.songsterr.com/a/ra/songs.json?pattern=${value}`)
    .then(response => {
      if (response.ok) return response;
      throw Error("something gone wrong");
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log(err);
    });

  const handleInput = e => {
    setValue(e.target.value);
  };
  return (
    <div className="App">
      <form action="submit">
        <input
          type="text"
          placeholder="title or artist"
          value={value}
          onChange={handleInput}
        />
        <button>search</button>
      </form>
      <p>hello world</p>
    </div>
  );
}

export default App;
