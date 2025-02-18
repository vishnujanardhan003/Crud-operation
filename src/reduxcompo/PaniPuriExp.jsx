import React from 'react'
import { buyPaniPuri } from '../redux/cakeexp/cakeAction'
import { connect } from 'react-redux'

const PaniPuriExp = (props) => {
  return (
    <div>
        <h1>Number of Pani Puris:{props.numOfPaniPuris}</h1>
        <button onClick={props.xyz}>Buy pani puri</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return{
        numOfPaniPuris:state.numOfPaniPuris
    }
}

const mapDispatchToProps=disPatch=>{
    return{
        xyz:()=>disPatch(buyPaniPuri())

    }
}

export default connect(mapStateToProps,mapDispatchToProps) (PaniPuriExp)