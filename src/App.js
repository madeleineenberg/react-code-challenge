import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import "./fontello/css/fontello.css"
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './pages/About';
import Career from './pages/Career';
import Startpage from './pages/Startpage';

function App() {

  //Routes to all the pages
  return (
    <Switch>
      
      <Route path="/about">
      <Navigation/>
      <About/>
      <Footer/>
      </Route>

      <Route path="/career">
        <Navigation/>
        <Career/>
        <Footer/>
        </Route>

      <Route exact path="/">
        <Navigation/>
        <Startpage/>
        <Footer/>
        </Route>
     
    </Switch>
  );
}

export default App;
