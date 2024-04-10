import { applyMiddleware, createStore } from "redux";
import weatherReducer from "./weather/weatherReducer";
import {configureStore} from "@reduxjs/toolkit"
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { thunk } from "redux-thunk";

const store = createStore(weatherReducer , applyMiddleware(thunk));

// const store = configureStore ({
//     reducer:{
//         weatherReducer
//     },
//     // middleware:[thunk]
// })

export default store;
