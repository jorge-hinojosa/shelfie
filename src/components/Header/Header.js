import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Shelfie</h1>
        <nav className="Nav">
          <Link to="/">
            <button className="Btn">Dashboard</button>
          </Link>
          <Link to="/addinventory">
            <button className="Btn">Add Inventory</button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
