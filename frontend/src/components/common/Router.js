import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from '../layout/Home';
import Login from '../accounts/Login';
import Register from '../accounts/Register';
import NotFound from '../NotFound/NotFound'// User is LoggedIn
import PrivateRoute from './PrivateRoute'
import Dashboard from '../products/Dashboard';
import ViewProduct from '../products/ViewProduct';




const Main = props1 => (
    <Switch>
        {/*User might LogIn*/}
        <Route exact path='/' component={Home} />
        {/*User will LogIn*/}
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        {/* User is LoggedIn*/}
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/ViewProduct' component={ViewProduct} />

        {/*Page Not Found*/}
        <Route component={NotFound} />
    </Switch>);

export default Main;