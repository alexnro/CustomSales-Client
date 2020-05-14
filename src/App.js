import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AppBarComponent from './components/Header/AppBarComponent';
import HomePage from './containers/HomePage';
import NewOrder from './containers/NewOrder';

class App extends Component {

    render() {

        const routes = (
            <Switch>
                <Route path="/new-order" component={NewOrder} />
                <Route path="/" exact component={HomePage} />
                <Redirect to="/" />
            </Switch>
        )

        return (
            <div className="App">
                <AppBarComponent />
                <div>
                    {routes}
                </div>
            </div>
        );
    }
}

export default withRouter(App);
