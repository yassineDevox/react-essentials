import React, { Component } from 'react'
//in case 
export default class Pure extends Component {
 
    constructor(){
        super()
        this.state ={
            list:["first value"]
        }
    }

    addNew = ()=>{
        // this.state.list.push("new item")
        console.log(this.state.list)
        this.setState({list:[...this.state.list,"new value"]})
        // this.forceUpdate()
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState)
        return false
    }
  render() {
    return (
      <>
      {JSON.stringify(this.state.list)}
      <div>Pure</div>
      <button onClick={this.addNew}>add</button>
      </>
    )
  }
}
