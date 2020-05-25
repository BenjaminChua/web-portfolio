import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './landing/LandingPage';
import ResumePage from './resume/ResumePage';
import NavBar from './landing/NavBar';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/resume" component={ResumePage} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Router>
    );
}

export default App;