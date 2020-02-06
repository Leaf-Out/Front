import React from 'react';
import './App.css';
import { Home } from "./components/homePage/Home";

export default class App extends React.Component {
  render(){
    return (
      <div>
          <Home/>
      </div>
    );
  }
}
