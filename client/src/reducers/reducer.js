import {combineReducers} from "redux";
import {getAllPizzaReducer} from "./pizzaReducers";
import {cartReducer} from "./cartReducers";
import {userRegisterReducer} from "./userReducers";
import {orderReducer} from "./orderReducers";


export const reducers = combineReducers({
    allPizza: getAllPizzaReducer,
    cart: cartReducer,
    userRegister: userRegisterReducer,
    order: orderReducer
})


