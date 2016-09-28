import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import About     from '../entities/About/About';
import Repos     from '../entities/Repos/Repos';
import Navigator from '../entities/Navigator/Navigator';

export default class Routes extends React.Component {
    render() {
        return  <Router history={hashHistory}>
                    <Route path="/" component={Navigator}>
                        <Route path="/repos" component={Repos}/>
                        <Route path="/about" component={About}/>
                    </Route>
                </Router>
    }
}