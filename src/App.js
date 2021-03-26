import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
import About from './pages/About';
import Career from './pages/Career';
import Startpage from './pages/Startpage';

function App() {
  return (
    <Switch>
      
      <Route path="/about">
      <Navigation/>
      <About/>
      </Route>

      <Route path="/career">
        <Navigation/>
        <Career/>
        </Route>

      <Route path="/">
        <Navigation/>
        <Startpage/>
        </Route>
     
    </Switch>
  );
}

export default App;
