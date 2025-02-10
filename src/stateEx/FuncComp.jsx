import React from 'react'

 function FuncComp(props) {
    console.log(props);
    let className=props.apply   
  return (
    <div>FuncComp</div>
  )
}
export default FuncComp;
