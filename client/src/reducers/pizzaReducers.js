import {GET_PIZZAS_FAILED, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS} from "./constans";


export const getAllPizzaReducer = (state={}, action) => {
   switch (action.type) {
       case GET_PIZZAS_REQUEST:
           return {...state, isLoading: true}
       case GET_PIZZAS_SUCCESS:
           return {...state, isLoading: false, pizzas: action.payload}
       case GET_PIZZAS_FAILED:
           return {...state, isLoading: false, error: action.payload}
       default:
           return {...state}
   }
}
