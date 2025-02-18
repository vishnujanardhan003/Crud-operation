import { PANI_PURI } from "./cakeType";
const intialState={
    numOfPaniPuris:100
}

const paniPuriReducer=(state=intialState,action)=>{
    switch(action.type){
        case PANI_PURI:
            return{
                numOfPaniPuris:state.numOfPaniPuris-20

            }
            break;

        default:return state;    
    }
}

export default paniPuriReducer;