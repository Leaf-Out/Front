import React from 'react';
import Home from "./components/views/Home";
import { Catalog } from "./components/elements/Catalog";
import Park from './components/views/Park';
import Plan from './components/views/Plan';
import SignIn from "./components/views/SignIn";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Activity from './components/views/Activity';
import HomeAdmin from './components/views/HomeAdmin';
import jwt from 'jsonwebtoken';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#39796b',
      main: '#004d40',
      dark: '#00251a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e2f1f8',
      main: '#b0bec5',
      dark: '#808e95',
      contrastText: '#000000',
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
              {/* {localStorage.getItem("token") ? jwt.decode(localStorage.getItem("token")).rol[0] === "ADMIN" ? <HomeAdmin /> : <Home /> : <Home />} */}
            </Route>
            <Route exact path="/catalog">
              <Catalog />
            </Route>
            <Route path="/park/:parkId">
              <Park />
            </Route>
            <Route exact path="/activity">
              <Activity />
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
    </ThemeProvider>
  );
}

export default App