import React from 'react'
import './App.scss'
import Home from './Pages/Home'
import CaseSolsken from './Pages/CaseSolsken'

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
          <CaseSolsken/>
        </Route>
        <Route exact path="/arrender">
          <CaseSolsken />
        </Route>
        <Route exact path="/quantumsnake">
          <CaseSolsken />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
