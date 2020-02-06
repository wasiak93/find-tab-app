import React, { useState } from "react";
import "./App.css";
import Form from "./Form/Form";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = e => {
    setValue(e.target.value);
  };
  const handleForm = e => {
    e.preventDefault();

    console.log(data);
  };
  fetch(`https://www.songsterr.com/a/ra/songs.json?pattern=${value}`)
    .then(response => {
      if (response.ok) return response;
      throw Error("something gone wrong");
    })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => {
      console.log(err);
    });

  return (
    <div className="container">
      <Form
        change={handleInputChange}
        search={handleForm}
        value={value}
        data={data}
      />

      <p>hello world</p>
    </div>
  );
}

export default App;
