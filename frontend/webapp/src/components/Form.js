import React, { Component } from "react";


export default class Form extends Component {
  render() {
    return (

        <form style={{ display: "Block", margin: "auto" }}>
          <div style={{ display: "Block", margin: "auto" }}>
            <label htmlFor="title">Title</label>
            <input id="title" />
          </div>
          <div style={{ display: "Block", margin: "auto" }}>
            <label htmlFor="content">Content</label>
            <textarea id="content" />
          </div>
          <button>Submit</button>
        </form>

    );
  }
}
