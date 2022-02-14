import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <>
        <div className="text-center p-5">
          <div className='text-center m-2'>{this.state.counter} 😃 !!</div>
          <button
            onClick={this.handleClick}
            className="btn btn-success">+</button>
        </div>
      </>
    )
  }
}
