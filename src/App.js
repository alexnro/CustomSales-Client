import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AppBarComponent from './components/header/AppBarComponent';
import HomePage from './containers/HomePage';
import Products from './containers/Products';

class App extends Component {

    render() {

        const routes = (
            <Switch>
                <Route path="/products" component={Products} />
                <Route path="/new-order" component={Products} />
                <Route path="/" exact component={HomePage} />
                <Redirect to="/" />
            </Switch>
        )

        return (
            <div className="App">
                <AppBarComponent />
                {routes}
            </div>
        );
    }
}

export default withRouter(App);
