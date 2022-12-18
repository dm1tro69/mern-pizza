import {combineReducers} from "redux";
import {getAllPizzaReducer} from "./pizzaReducers";
import {cartReducer} from "./cartReducers";


export const reducer = combineReducers({
    allPizza: getAllPizzaReducer,
    cart: cartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []

export const initialState = {
     cartItems
}
