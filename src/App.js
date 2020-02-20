import React from 'react';
import { Home } from "./components/homePage/Home";
import { Catalog } from "./components/parkCatalog/Catalog";
import { Header } from './components/parkCatalog/park/components/Header';
import { Park } from './components/parkCatalog/park/Park';
import SignIn from "./components/session/SignIn";
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
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/catalog">
              <Catalog />
            </Route>
            <Route exact path="/park">
              <Park />
            </Route>
            <Route exact path="/SignIn">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }


}