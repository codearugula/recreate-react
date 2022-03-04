import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="badge bg-primary m-2">{this.props.value}</span>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.handleIncrement(this.props.id)}
        >
          Add
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.handleCancel(this.props.id)}
        >
          Cancel
        </button>
      </div>
    );
  }
}

export default Counter;
