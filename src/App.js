import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import './App.css';

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/' exact component={Rooms} />
        <Route path='/rooms/:slug' exact component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
