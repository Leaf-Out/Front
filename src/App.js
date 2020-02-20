import React from 'react';
import { Home } from "./components/homePage/Home";
import { Catalog } from "./components/parkCatalog/Catalog";
import { Header } from './components/parkCatalog/park/components/Header';
import { Park } from './components/parkCatalog/park/Park';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/catalog">
              <Catalog />
            </Route>
            <Route path="/park">
              <Park />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }


}