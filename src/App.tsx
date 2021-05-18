import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import CaseSolskenWeb from 'Pages/CaseSolskenWeb'
import Footer from 'components/Footer'

function App() {
  return (
    <>
      <div id="content">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/solsken">
              <NotFound isUnfinished={true}/>
            </Route>
            <Route exact path="/solskenweb">
              <CaseSolskenWeb/>
            </Route>
            <Route exact path="/avocado">
              <NotFound isUnfinished={true}/>
            </Route>
            <Route exact path="/quantumsnake">
              <NotFound isUnfinished={true}/>
            </Route>
            <Route exact path="/pool">
              <NotFound isUnfinished={true}/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
