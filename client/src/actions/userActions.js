import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS, USER_LOGOUT,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST
} from "../reducers/constans";
import axios from "axios";


export const registerUser = (user) => async (dispatch) => {
     dispatch({type: USER_REGISTER_REQUEST})
     try {
        await axios.post('/api/users/register', user)
         dispatch({type: USER_REGISTER_REQUEST})
     }catch (e) {
       dispatch({type: USER_REGISTER_FAILED, payload: e.message})
     }
}

export const loginUser = (user) => async (dispatch) =>{
    dispatch({type: USER_LOGIN_REQUEST})
   try {
       const {data} = await axios.post('/api/users/login', user)

       dispatch({type: USER_LOGIN_SUCCESS, payload: data})


   }catch (e) {
       dispatch({type: USER_LOGIN_FAILED, payload: e.message})
   }
}
export const logOut = () => (dispatch) => {
    dispatch({type: USER_LOGOUT})
}
