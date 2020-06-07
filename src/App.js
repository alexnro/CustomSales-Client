import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AppBarComponent from './components/header/AppBarComponent';
import HomePage from './containers/HomePage';
import Products from './containers/Products';
import InDevelopment from './containers/InDevelopment';
import axios from './axiosBaseUrl';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            clients: []
        };

        this.getProducts = this.getProducts.bind(this);
        this.getClients = this.getClients.bind(this);
    }

    getProducts() {
        axios.get("/products")
            .then(response => {
                this.setState({ products: response.data }, () => this.props.setProducts(this.state.products));
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
    }

    getClients() {
        axios.get("/clients")
            .then(response => {
                this.setState({ clients: response.data }, () => this.props.setClients(this.state.clients));
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getProducts();
        this.getClients();
    }

    render() {

        const routes = (
            <Switch>
                <Route path="/products" component={Products} />
                <Route path="/new-order" component={Products} />
                <Route path="/not-developed" component={InDevelopment} />
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

const mapDispatchToProps = dispatch => {
    return {
        setProducts: (products) => dispatch({ type: actionTypes.SET_PRODUCTS, products: products }),
        setClients: (clients) => dispatch({ type: actionTypes.SET_CLIENTS, clients: clients })
    }
}

export default connect(null, mapDispatchToProps)(withRouter(App));
