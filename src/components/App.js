import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './headerFooter/NavBar';
import LandingPage from './landing/LandingPage';
import ResumePage from './resume/ResumePage';
import ExchangePage from './exchange/ExchangePage';
import Footer from './headerFooter/Footer';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/resume" component={ResumePage} />
                <Route path="/exchange" component={ExchangePage} />
                <Route path="/home" component={LandingPage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;