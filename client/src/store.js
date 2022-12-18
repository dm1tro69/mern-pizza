import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {reducer} from "./reducers/reducer";


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []

 const initialState = {
    cartReducer: {cartItems}
}

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

