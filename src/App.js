import React from 'react';
import { Home } from "./components/views/Home";
import { Catalog } from "./components/elements/Catalog";
import { Park } from './components/views/Park';
import { Plan } from './components/views/Plan';
import SignIn from "./components/views/SignIn";
import {
  BrowserRouter as Router,
  Switch,
  Route
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
            <Route exact path="/Plan">
              <Plan />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }


}