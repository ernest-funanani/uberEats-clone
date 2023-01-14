import {
  RESTURANT_LIST_REQUEST,
  RESTURANT_LIST_SUCCESS,
  RESTURANT_LIST_FAIL,
} from "../types/resturantType";

export const resturantListReducer = (state = { resturants: [] }, action) => {
  switch (action.type) {
    case RESTURANT_LIST_REQUEST:
      return { loading: true, resturants: [] };
    case RESTURANT_LIST_SUCCESS:
      return { loading: false, resturants: action.payload };
    case RESTURANT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
