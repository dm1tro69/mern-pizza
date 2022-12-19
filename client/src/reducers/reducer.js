import {combineReducers} from "redux";
import {getAllPizzaReducer} from "./pizzaReducers";
import {cartReducer} from "./cartReducers";
import {userRegisterReducer} from "./userReducers";


export const reducers = combineReducers({
    allPizza: getAllPizzaReducer,
    cart: cartReducer,
    userRegister: userRegisterReducer
})


