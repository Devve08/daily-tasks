"use client";

import { combineReducers } from "redux";
import taskReducer from "../taskReducer";

const appReducer = combineReducers({
  task: taskReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
