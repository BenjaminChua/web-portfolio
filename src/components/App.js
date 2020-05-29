import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import pathContext from '../contexts/pathContext';
import NavBar from './headerFooter/NavBar';
import LandingPage from './landing/LandingPage';
import ResumePage from './resume/ResumePage';
import ExchangePage from './exchange/ExchangePage';
import Footer from './headerFooter/Footer';
import ToBeCompleted from './ToBeCompleted';

class App extends React.Component {
    static contextType = pathContext;
    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route path={this.context.resumePath} component={ResumePage} />
                    <Route path={this.context.exchangePath} component={ExchangePage} />
                    <Route path={this.context.mainPath} component={LandingPage} />
                    <Route component={ToBeCompleted} />
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;