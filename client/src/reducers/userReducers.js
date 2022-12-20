import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS, USER_LOGOUT,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "./constans";


export const userRegisterReducer = (state={currentUser: {}}, action) => {
   switch (action.type) {
       case USER_REGISTER_REQUEST:
           return {...state, isLoading: true}
       case USER_REGISTER_SUCCESS:
           return {...state, isLoading: false, success: true}
       case USER_REGISTER_FAILED:
           return {...state, success: false, isLoading: false, error: action.payload}
       case USER_LOGIN_REQUEST:
           return {...state, isLoading: true}
       case USER_LOGIN_SUCCESS:
           return {...state, isLoading: false, success: true, currentUser: action.payload}
       case USER_LOGIN_FAILED:
           return {...state, success: false, isLoading: false, error: action.payload}
       case USER_LOGOUT:
           return {...state, success: true, isLoading: false, currentUser: {}}
       default:
           return {...state}
   }
}
