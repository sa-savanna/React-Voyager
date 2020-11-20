import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Overview from './Components/Discover/Overview';
import Cards from './Components/Todo/Cards';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Switch>
          <Route exact path="/"><Home /> </Route>
          <Route path="/overview/:country"><Overview /> </Route>
          <Route path="/whattodo"><Cards/> </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
