import authRducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authRducer,
  project: projectReducer
});

export default rootReducer;
