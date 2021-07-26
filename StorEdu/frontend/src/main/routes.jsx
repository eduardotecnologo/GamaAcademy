import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/home';
import UserCrud from '../components/user/user-crud';
import ProductCrud from '../components/product/ProductCrud';
import ClientCrud from '../components/cliente/ClientCrud';

/*Mapeamento dos links aos componentes*/
export default props =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UserCrud} />
        <Route exact path="/products" component={ProductCrud} />
        <Route exact path="/clients" component={ClientCrud} />
        <Redirect from="*" to="/" />
    </Switch>


