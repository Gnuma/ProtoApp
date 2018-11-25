import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { testOne } from "./store/actions/test";

class App extends Component {
  constructor(props) {
    super(props);

    this.changeTest = this.changeTest.bind(this);
  }

  changeTest(e) {
    console.log(e.target.value);
    this.props.testOne(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changeTest} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    test: state.test
  };
};

const mapDispatchToProps = dispatch => {
  return {
    testOne: test => dispatch(testOne(test))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
