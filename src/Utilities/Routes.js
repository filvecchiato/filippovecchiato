import React from 'react';

import {Route, Redirect, Switch} from 'react-router-dom';
import NoMatch from '../components/General/NoMatch';
import Homepage from '../containers/Homepage'
import WorkPage from '../containers/Work';
import AboutPage from '../containers/About';
import ContactPage from '../containers/Contacts';

const Routes = props => {
    return (
        <Switch>
            <Route exact path='/home' component={Homepage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/contacts" component={ContactPage}/>
            <Route exact path="/projects" component={WorkPage}/>
            <Redirect exact path="/" to="/home"/>
            <Route path="*" component={NoMatch}/>
        </Switch>
    )
}

export default Routes;