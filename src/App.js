import "./App.css";
import React, { Component } from "react";
import Counters from "./Components/counters";
import NavBar from "./Components/navbar";

class App extends Component {
  state = {
    data: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleCancel = (id) => {
    this.setState({
      data: this.state.data.filter((datum) => {
        return datum.id !== id;
      }),
    });
  };

  handleIncrement = (id) => {
    const newData = [...this.state.data];
    this.setState({
      data: newData.map((datum) => {
        if (datum.id === id) {
          datum.value++;
        }
        return datum;
      }),
    });
  };

  handleTotalItems = () => {
    let counter = 0;
    this.state.data.forEach((e) => (counter += e.value));
    return counter;
  };

  render() {
    return (
      <div>
        <NavBar handleTotalItems={this.handleTotalItems} />
        <Counters
          handleIncrement={this.handleIncrement}
          handleCancel={this.handleCancel}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
