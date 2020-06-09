import React from 'react';

import {Route, Redirect, Switch} from 'react-router-dom';
import NoMatch from '../components/General/NoMatch';
import Homepage from '../containers/Homepage'

const Routes = props => {
    return (
        <Switch>
            <Route exact path='/home' component={Homepage}/>
            <Route exact path="/about" />
            <Route exact path="/contacts" />
            <Route exact path="/projects" />
            <Route exact path="/passions" />
            <Route exact path="/engineering" />
            <Route exact path="/consulting" />
            <Redirect exact path="/" to="/home"/>
            <Route path="*" component={NoMatch}/>
        </Switch>
    )
}

export default Routes;