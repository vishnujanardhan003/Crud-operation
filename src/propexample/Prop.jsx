import React, { Component } from 'react'

export default class Prop extends Component {
  render() {
    if(this.props.isLogged==true){
    return (
      <div>Prop
        <h1>welcome{this.props.name}</h1>
        {
            this.props.hobbies.map((val)=>{
                return <li>{val}</li>
            })
        }
      </div>
    )
  }
}}
