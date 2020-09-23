import React from 'react'
import './App.scss'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import UnderConstruction from './Pages/UnderConstruction'
import CasePool from './Pages/CasePool'
import CaseQuantum from './Pages/CaseQuantum'
import CaseSolsken from './Pages/CaseSolsken'
import CaseSolskenWeb from './Pages/CaseSolskenWeb'

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
          <CaseSolsken />
        </Route>
        <Route exact path="/solskenweb">
          <CaseSolskenWeb />
        </Route>
        <Route exact path="/arrender">
          <UnderConstruction />
        </Route>
        <Route exact path="/quantumsnake">
          <CaseQuantum />
        </Route>
        <Route exact path="/pool">
          <CasePool />
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
