import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AppBarComponent from './components/header/AppBarComponent';
import HomePage from './containers/HomePage';
import Products from './containers/Products';
import InDevelopment from './containers/InDevelopment';
import Login from './containers/Login';
import axios from './axiosBaseUrl';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            clients: [],
            isLogin: false
        };

        this.getProducts = this.getProducts.bind(this);
        this.getClients = this.getClients.bind(this);
        this.isLogin = this.isLogin.bind(this);
    }

    isLogin() {
        let isLogin = window.location.pathname === '/login' ? true : false;
        this.setState({ isLogin: isLogin });
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
        this.isLogin();
        console.log(this.state);
        this.getProducts();
        this.getClients();
    }

    render() {

        const routes = (
            <Switch>
                <Route path="/products" component={Products} />
                <Route path="/new-order" component={Products} />
                <Route path="/not-developed" component={InDevelopment} />
                <Route path="/menu" component={HomePage} />
                <Route path="/login" component={Login} />
                <Redirect to="/menu" />
            </Switch>
        )

        return (
            <div className={this.state.isLogin ? "Login" : "App"}>
                {!this.state.isLogin ?
                    <AppBarComponent />
                    : null
                }
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
