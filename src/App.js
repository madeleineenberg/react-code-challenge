import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Career from './pages/Career';
import Startpage from './pages/Startpage';

function App() {
  return (
    <Switch>
      
      <Route path="/about" component={About}/>
      <Route path="/career" component={Career}/>
      <Route path="/" component={Startpage}/>
     
    </Switch>
  );
}

export default App;
