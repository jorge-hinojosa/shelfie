import React, { Component } from "react";
import axios from "axios";
import { HashRouter as Router, Link } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import routes from "./routes";

class App extends Component {
  render() {
    // const { inventory, selectedProduct } = this.state;

    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Link to="/" />
          </main>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
