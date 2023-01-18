import { useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import { shoppingReducer } from "../../../reducers/shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { cart: [], user: null };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  //Selectors
  const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

  const addToCart = async ({ item }) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  const emptyCart = () => {
    dispatch({
      type: "EMPTY_CART",
    });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const setUser = (user) => {
    console.log("User payload", user);
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        cart: state.cart,
        user: state.user,
        getCartTotal,
        addToCart,
        setUser,
        removeFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
