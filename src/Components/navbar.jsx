import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {" "}
        <button
          className="navbar-toggler"
          type="button"
          data-target="#navigation"
        >
          {" "}
          <span className="navbar-toggler-icon"></span>{" "}
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <span className="badge bg-primary m-2">
                {this.props.handleTotalItems()}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
