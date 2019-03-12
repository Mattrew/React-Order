import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import App from '../App';
import Detail from '../components/Detail';

const BasicRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Detail/:dishNo" component={Detail}/>
        </Switch>
    </Router>
);

export default BasicRoute;
