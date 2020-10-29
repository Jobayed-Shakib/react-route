import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Componets/Home/Home';
import NoMatch from './Componets/NoMacth/NoMatch';
import FriendDetails from './Componets/FriendDetails/FriendDetails';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route exact path='/'>
         <Home/>
        </Route>
        <Route path='/about/:id'>
          <FriendDetails></FriendDetails>
        </Route>
        <Route path='*'>
        <NoMatch/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
