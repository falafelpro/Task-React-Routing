import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import Detail from "./components/Detail";

import products from "./products";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/productList">
          <ProductList products={products} />
        </Route>
        <Route exact path="/detail/:id">
          <Detail products={products} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
