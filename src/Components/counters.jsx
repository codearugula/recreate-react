import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((datum) => {
          return (
            <Counter
              key={datum.id}
              id={datum.id}
              value={datum.value}
              handleCancel={this.props.handleCancel}
              handleIncrement={this.props.handleIncrement}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
