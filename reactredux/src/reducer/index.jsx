import changeNumber from "./updown"; //import the updown reducer

import {combineReducers} from "redux";

//rootReducer is the main reducer that combines all the reducers into one.  
// It takes an object of actions and their corresponding reducers as arguments.
 const rootReducer = combineReducers({ 
    changeNumber
});
export default  rootReducer;