import React from 'react';

import {Route, Redirect, Switch} from 'react-router-dom';
import NoMatch from '../../src/components/NoMatch';

const Routes = props => {
    return (
        <Switch>
            <Route exact path='/home' />
            <Route path="*" component={NoMatch}/>
        </Switch>
    )
}

export default Routes;