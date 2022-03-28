import { loginReducer } from "./Login/loginReducer";
import { combineReducers, createStore } from "redux";


const rootReducer = combineReducers({
    user: loginReducer,
});

export const store = createStore(rootReducer); // add your reducers here

