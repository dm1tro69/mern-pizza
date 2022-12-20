import {PLACE_ORDER_FAILED, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS} from "../reducers/constans";
import axios from "axios";

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
    dispatch({type: PLACE_ORDER_REQUEST})
     try {
        const currentUser = getState().userRegister.currentUser
         const cartItems = getState().cart.cartItems
        const {data} = await axios.post('/api/orders/placeorder', {token, subTotal, cartItems, currentUser})
         console.log(data)
         dispatch({type: PLACE_ORDER_SUCCESS, payload: data})
     }catch (e) {
         dispatch({type: PLACE_ORDER_FAILED, payload: e.message})
     }
}
