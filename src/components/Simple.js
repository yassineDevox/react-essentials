import React, { Component } from 'react'

export default class Simple extends Component {

    constructor(){
        super()
        this.state ={
                list:["first value"]
        }
    }

    addNew = ()=>{
        this.state.list.push("new item")
        console.log(this.state.list)
    }

  render() {
    return (
      <>
      {JSON.stringify(this.state.list)}
      <div>Simple</div>
      <button onClick={this.addNew}>add</button>
      </>
    )
  }
}