import {ADD_TO_CART} from "../reducers/constans";

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
     dispatch({type: ADD_TO_CART, payload: cartItem})
     localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
