import React from 'react'

const CBCPropsex = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.desig[1]}</h1>
      <h1>{props.userDetails.area}</h1>
      <button onClick={props.sendFun}>ClickMe</button>

    </div>
  )
}

export default CBCPropsex