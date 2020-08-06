import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './pages/home';
import { Institution } from './pages/institution';
import { Register } from './pages/register';
import { Linked } from './pages/linked';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact {...props} />
                <Route path='/institution' component={Institution} exact {...props} />
                <Route path='/register' component={Register} exact {...props} />
                <Route path='/linked' component={Linked} exact {...props} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes