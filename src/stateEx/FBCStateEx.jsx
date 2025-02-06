import React,{useState} from 'react'

const FBCStateEx = () => {
    const[value,setValue]=useState("MRU");
    let changename=()=>{
        setValue("Malla Reddy University");
    }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={changename}>change state</button>
    </div>
  )
}

export default FBCStateEx