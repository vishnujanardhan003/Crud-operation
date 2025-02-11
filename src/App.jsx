import React from 'react'
import PropChild from './propexample/PropChild'
import ChildPro from './propexample/ChildPro'
import CBCStateEx from './stateEx/CBCStateEx'
import FBCStateEx from './stateEx/FBCStateEx'
import Incre from './stateEx/Incre'
import EXUseEffect from './stateEx/EXUseEffect'
import RefExp from './hooks/RefExp'

const App=()=> {
    return (
        <div>
            <PropChild username="vishnu"company="amazon">
                <h1>This is a passed as props children</h1>
                <ChildPro/>
            </PropChild>
            <Incre/>
            

            <CBCStateEx/>
            <FBCStateEx/>
            <EXUseEffect/>
            <RefExp/>



        </div>
    )
}

export default App