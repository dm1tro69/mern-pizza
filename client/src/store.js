import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {reducers} from "./reducers/reducer";


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('cartItems')): null

 const initialState = {
    userReducer: {
        currentUser
    }
}

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

