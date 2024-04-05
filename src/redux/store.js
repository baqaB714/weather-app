import { applyMiddleware, createStore } from "redux";
import weatherReducer from "./weather/weatherReducer";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { thunk } from "redux-thunk";

const store = createStore(weatherReducer , applyMiddleware(thunk));

export default store;