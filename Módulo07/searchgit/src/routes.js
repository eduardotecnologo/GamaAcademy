import React from 'react';
import {} from 'react-router-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Index';
import Repositories from './Pages/Repositories/Index';

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