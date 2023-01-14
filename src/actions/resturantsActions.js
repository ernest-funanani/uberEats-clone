import {
  RESTURANT_LIST_REQUEST,
  RESTURANT_LIST_SUCCESS,
  RESTURANT_LIST_FAIL,
} from "../types/resturantType";
import axios from "axios";

export const listResturant = () => async (dispatch) => {
  try {
    dispatch({ type: RESTURANT_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:5000/resturants");

    dispatch({ type: RESTURANT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: RESTURANT_LIST_FAIL, payload: error });
  }
};
