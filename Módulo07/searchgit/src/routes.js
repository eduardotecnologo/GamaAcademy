import React from 'react';
import {} from 'react-router-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Repositories from './Repositories/Repositories';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/repositories' component={Repositories}/>
      </Switch>
    </BrowserRouter>
  )
}