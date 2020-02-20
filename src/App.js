import React from 'react';
import { Home } from "./components/homePage/Home";
import {Park} from "./components/parkCatalog/park/Park"

export default class App extends React.Component {
  render(){
    return (
      <div>
          <Park/>
      </div>
    );
  }
}