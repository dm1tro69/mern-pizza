import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {initialState, reducer} from "./reducers/reducer";


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
