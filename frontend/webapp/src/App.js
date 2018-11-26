import React, { Component } from "react";
import Layout from "./containers/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <BaseRouter />
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
