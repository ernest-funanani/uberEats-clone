import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./componets/layouts/Footer";
import Header from "./componets/layouts/Header";
import Pickup from "./componets/Pickup";
import Home from "./componets/Home";
import AddAddress from "./componets/AddAddress";
import Login from "./componets/Login";
import Lists from "./componets/Lists";
import Shop from "./componets/shops/Shop";
import Product from "./componets/shops/Product";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/pickup">
            <Pickup />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
