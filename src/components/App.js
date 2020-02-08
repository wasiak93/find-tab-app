import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Result from "./Result/Result";

class App extends Component {
  state = {
    value: "",
    data: "",
    isActive: [
      { id: 0, name: "CHORDS", view: "chords", active: false },
      { id: 1, name: "TEXT_BASS_TAB", view: "bass", active: false },
      { id: 2, name: "TEXT_GUITAR_TAB", view: "guitar", active: false },
      { id: 3, name: "PLAYER", view: "player", active: false }
    ],
    activeTasks: [],
    searchResult: ""
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
    this.setState({
      searchResult: this.state.value
    });
  };

  handleTabButton = id => {
    let tabs = [];
    let activeTasks = [];

    this.state.isActive.map(item =>
      tabs.push({
        id: item.id,
        name: item.name,
        view: item.view,
        active: item.id === id ? !item.active : item.active
      })
    );

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
      <div className="wrapper">
        <Header
          change={this.handleInputChange}
          search={this.handleForm}
          value={this.state.value}
          buttonsActive={this.state.isActive}
          click={this.handleTabButton}
        />

        <Result
          data={this.state.data}
          activeTasks={this.state.activeTasks}
          result={this.state.searchResult}
        />
      </div>
    );
  }
}

export default App;
