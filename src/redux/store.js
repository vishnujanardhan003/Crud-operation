import {applyMiddleware,createStore} from "redux";
import paniPuriReducer from "./cakeexp/cakeReducer";
import logger from "redux-logger";

const store=createStore(paniPuriReducer,applyMiddleware(logger));
export default store;