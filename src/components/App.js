import React from "react";
import "./App.css";

function App() {
  fetch("https://www.songsterr.com/a/ra/songs.json?pattern=beatles")
    .then(response => {
      if (response.ok) return response;
      throw Error("something gone wrong");
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log(err);
    });

  return (
    <div className="App">
      <form action="submit">
        <input type="text" placeholder="title or artist" />
        <button>search</button>
      </form>
      <p>hello world</p>
    </div>
  );
}

export default App;
