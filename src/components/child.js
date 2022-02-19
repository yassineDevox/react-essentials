import React, { Component } from "react";

export default class Child extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      isloading: false,
    };
    console.log("create App object 😃");
  }

  //component did mount
  componentDidMount() {
    console.log("App Did Mount (fetch api ... ) 😃");
  }

  handleClickDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
    // console.log("counter changed 🅰️")
  };

  handleClickIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
    // console.log("counter changed 🅰️")
  };

  //-------- component did update
  componentDidUpdate(prevProp, prevState) {
    console.log(
      "counter changed from " + prevState.counter + " to " + this.state.counter
    );
    // tracki chi state cibler
    if (prevState.isloading != this.state.isloading) {
      console.log("isloading changed ");
    }
  }

  //component will unmount
  componentWillUnmount() {
    console.log("see you soon broo 😢 !");
  }

  render() {
    let { counter } = this.state;
    return (
      <div className="text-center">
        <button className="btn btn-primary" onClick={this.handleClickDecrement}>
          -
        </button>
        <div>{counter}</div>
        <button className="btn btn-primary" onClick={this.handleClickIncrement}>
          +
        </button>
      </div>
    );
  }
}
