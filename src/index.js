import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ShoppingState } from "./componets/context/shopping/ShoppingState";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ShoppingState>
        <App />
      </ShoppingState>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
