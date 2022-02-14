import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super()
    this.counter = 0
    console.log(typeof this.counter)
  }

  handleClick = () => {
    this.counter++
    console.log(this.counter)
  }

  render() {
    return (
      <>
        <div className="text-center p-5">
          <div className='text-center m-2'>{this.counter} 😃 !!</div>
          <button
            onClick={this.handleClick}
            className="btn btn-success">+</button>
        </div>
      </>
    )
  }
}
