import React from 'react'
import './App.scss'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import UnderConstruction from './Pages/UnderConstruction'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/solsken">
          <UnderConstruction/>
        </Route>
        <Route exact path="/solskenweb">
          <UnderConstruction/>
        </Route>
        <Route exact path="/avocado">
          <UnderConstruction/>
        </Route>
        <Route exact path="/quantumsnake">
          <UnderConstruction/>
        </Route>
        <Route exact path="/pool">
          <UnderConstruction/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
