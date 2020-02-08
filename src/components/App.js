import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Result from "./Result/Result";

class App extends Component {
  state = {
    value: "",
    data: "",
    isSelected: [
      { id: 0, name: "PLAYER", view: "player", selected: false },
      { id: 1, name: "TEXT_GUITAR_TAB", view: "guitar", selected: false },
      { id: 2, name: "CHORDS", view: "chords", selected: false },
      { id: 3, name: "TEXT_BASS_TAB", view: "bass", selected: false }
    ],
    selectedTabs: [],
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
    let selectedTabs = [];

    this.state.isSelected.map(item =>
      tabs.push({
        id: item.id,
        name: item.name,
        view: item.view,
        selected: item.id === id ? !item.selected : item.selected
      })
    );

    tabs.map(item =>
      item.selected === true ? selectedTabs.push(item.name) : null
    );
    this.setState({
      isSelected: tabs,
      selectedTabs
    });
  };
  render() {
    return (
      <div className="wrapper">
        <Header
          change={this.handleInputChange}
          search={this.handleForm}
          value={this.state.value}
          selectedButtons={this.state.isSelected}
          click={this.handleTabButton}
        />

        <Result
          data={this.state.data}
          selectedTabs={this.state.selectedTabs}
          result={this.state.searchResult}
        />
      </div>
    );
  }
}

export default App;
