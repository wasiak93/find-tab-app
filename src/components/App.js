import React, { Component } from "react";
import "./App.css";
import Form from "./Form/Form";
import Result from "./Result/Result";

class App extends Component {
  state = {
    value: "",
    data: "",
    isActive: [
      { id: 0, name: "CHORDS", active: false },
      { id: 1, name: "TEXT_BASS_TAB", active: false },
      { id: 2, name: "TEXT_GUITAR_TAB", active: false },
      { id: 3, name: "PLAYER", active: false }
    ],
    activeTasks: []
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
    let tabs = [];
    let activeTasks = [];

    this.state.isActive.map(item =>
      tabs.push({
        id: item.id,
        name: item.name,
        active: item.id === id ? !item.active : item.active
      })
    );

    // tabs.map(item => (item.active === true ? console.log(item) : null));
    tabs.map(item =>
      item.active === true ? activeTasks.push(item.name) : null
    );
    this.setState({
      isActive: tabs,
      activeTasks
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
        {this.state.data.length >= 1 ? (
          <Result data={this.state.data} activeTasks={this.state.activeTasks} />
        ) : null}
      </div>
    );
  }
}

export default App;
