import React, { Component } from 'react'

 class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            username:"vishnu"
        }
    }
    changeName=()=>{
        this.setState({username:"janardhan"});
    }
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button onClick={this.changeName}>update the state</button>
      </div>
    
    )
  }
}
export default CBCStateEx;
