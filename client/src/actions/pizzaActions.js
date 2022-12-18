import axios from "axios";
import {GET_PIZZAS_FAILED, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS} from "../reducers/constans";

export const getAllPizzas = () => async (dispatch) => {
     dispatch({type: GET_PIZZAS_REQUEST})
    try {
        const {data} = await axios.get('/api/pizzas/getpizzas')
        dispatch({type: GET_PIZZAS_SUCCESS, payload: data})
    }catch (e) {
        dispatch({type: GET_PIZZAS_FAILED, payload: e.message})
    }

}
