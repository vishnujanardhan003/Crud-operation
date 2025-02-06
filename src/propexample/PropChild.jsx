import React from 'react'

const PropChild = (props) => {
  return (
    <div>PropChild
        <hr/>
        <h1>{props.username}</h1>
        <h1>{props.company}</h1>
        {
            props.children[0]
        }
    </div>
    
  )
}

export default PropChild

