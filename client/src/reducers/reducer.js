import {combineReducers} from "redux";
import {getAllPizzaReducer} from "./pizzaReducers";
import {cartReducer} from "./cartReducers";


export const reducers = combineReducers({
    allPizza: getAllPizzaReducer,
    cart: cartReducer
})


