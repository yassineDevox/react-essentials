import React, { Component } from "react";
import Child from "./components/child";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    let { show } = this.state;
    return (
      <>
        {show ? <Child /> : null}
        <button 
        onClick={
          () => this.setState({ show: false })
        }>
            kill
          </button>
      </>
    );
  }
}
