import React from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter,Route, Switch } from "react-router-dom";
const App = () => {
 
  return (
    <div>
      <BrowserRouter>
      <Switch>
        {/* rout path for going different options like game, music,settings */}
        <Route exact path="/" component={Navbar} />
        <Route path="/Passenger" component={Navbar} />
        </Switch>
      </BrowserRouter>
    
    </div>
  )
}

export default App

