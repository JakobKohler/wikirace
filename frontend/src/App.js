import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import mainMenu from './components/main-menu.component';
import ranRace from './components/random-race.component';
import customRace from './components/custom-race.component';

function App() {
  return (
    <Router>
      <Route exact={true} path="/" component={mainMenu}/>
      <Route path='/ranRace' component={ranRace}/>
      <Route path='/customRace' component={customRace}/>
    </Router>
  );
}

export default App;
