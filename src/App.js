import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopMenu from "./component/TopMenu.js";
import Products from "./pages/Products.js";
import { CartProvider } from "./context/Cart.js";
export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
        </div>
        <Switch>
          <Route path="/product/">
            <Products />
          </Route>
          <Route path="/">
            <h2>Home</h2>
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}
