import {ADD_TO_CART} from "./constans";






export const cartReducer = (state={cartItems: []}, action) => {
   switch (action.type) {
       case ADD_TO_CART:
           return {...state, cartItems:[...state.cartItems, action.payload]}
       case '':
           return {...state}
       default:
           return {...state}
   }
}
