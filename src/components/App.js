import React, { Component } from "react";
import "./App.css";
import Form from "./Form/Form";
import Result from "./Result/Result";

class App extends Component {
  state = {
    value: "",
    data: "",
    isActive: [
      { id: 0, name: "chords", active: false },
      { id: 1, name: "bass", active: false },
      { id: 2, name: "guitar", active: true },
      { id: 3, name: "player", active: false }
    ]
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleForm = e => {
    e.preventDefault();
    fetch(
      `https://www.songsterr.com/a/ra/songs.json?pattern=${this.state.value}`
    )
      .then(response => {
        if (response.ok) return response;
        throw Error("something gone wrong");
      })
      .then(response => response.json())
      .then(data =>
        this.setState({
          data
        })
      )

      .catch(err => {
        console.log(err);
      });
  };

  handleTabButton = id => {
    const tabs = [];

    this.state.isActive.map(item =>
      tabs.push({
        id: item.id,
        name: item.name,
        active: item.id === id ? !item.active : item.active
      })
    );
    this.setState({
      isActive: tabs
    });
  };
  render() {
    return (
      <div className="container">
        <Form
          change={this.handleInputChange}
          search={this.handleForm}
          value={this.state.value}
          data={this.state.data}
          buttonsActive={this.state.isActive}
          click={this.handleTabButton}
        />
        <Result data={this.state.data} />
      </div>
    );
  }
}

export default App;
