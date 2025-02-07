import React, { Component } from 'react'
import "./cbcstateex.css";
 class Incre extends Component {
    constructor(){
        super();
        this.state={
            username:"Pranav",
            count:0
        };
    }
//    changeName=()=>{
//     this.setState({username : "Shravan is absent from last two days"});
//    }
increment=()=>{
    this.setState({count:this.state.count + 2})
}

decrement=()=>{
    this.setState({count:this.state.count -2})
}

reset=()=>{
    this.setState({count:0})
}
    
  render() {
    console.log(this);
    return (
      <div className='cbcstate'>

        {/* <h1>{this.state.username}</h1>
        <button onClick={this.changeName}>Update the State</button> */}

        <h1>{this.state.count}</h1>
        <div className='btn'>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}
export default Incre;
