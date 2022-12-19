import {ADD_TO_CART, REMOVE_FROM_CART} from "../reducers/constans";

export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
     const cartItem = {
          name: pizza.name,
          _id: pizza._id,
          image: pizza.image,
          varient,
          quantity,
          prices: pizza.prices,
          price: pizza.prices[0][varient]*quantity
     }
     if (cartItem.quantity > 9){
         return alert('Your cannot add more than 10 quantity')
     }else {

          dispatch({type: ADD_TO_CART, payload: cartItem})
     }
     if (cartItem.quantity < 1){
          dispatch({type: REMOVE_FROM_CART, payload: pizza})
     }


}
export const deleteFromCart = (pizza) => (dispatch, getState) => {
     dispatch({type: REMOVE_FROM_CART, payload: pizza})

}
