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
        this.getData = this.getData.bind(this);
        this.isLogin = this.isLogin.bind(this);
        this.exitLogin = this.exitLogin.bind(this);
        this.authenticateToken = this.authenticateToken.bind(this);
    }

    isLogin() {
        let isLogin = window.location.pathname === '/login' ? true : false;
        this.setState({ isLogin: isLogin });
    }

    exitLogin() {
        this.setState({ isLogin: false })
    }

    authenticateToken() {
        const token = localStorage.getItem("token");
        axios.post("/users/authenticate", { "Token": token })
            .then(response => {
                console.log(response);
                if (response.data) {
                    this.props.loginUser(response.data.Username)
                    this.getData();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    getData() {
        this.getProducts();
        this.getClients();
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
        if (localStorage.getItem("token")) {
            this.authenticateToken();
        }
        this.isLogin();
    }

    render() {

        let routes = (
            <Switch>
                <Route path="/login" render={() => <Login exitLogin={this.exitLogin} />} />
                <Redirect to="/login" />
            </Switch>

        )

        if (this.props.user.IsAuth) {
            routes = (
                <Switch>
                    <Route path="/products" component={Products} />
                    <Route path="/new-order" component={Products} />
                    <Route path="/not-developed" component={InDevelopment} />
                    <Route path="/menu" component={HomePage} />
                    <Redirect to="/menu" />
                </Switch>
            )

            return (
                <div className="App">
                    <AppBarComponent />
                    {routes}
                </div>
            )
        }

        return (
            <div className="Login">
                {routes}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProducts: (products) => dispatch({ type: actionTypes.SET_PRODUCTS, products: products }),
        setClients: (clients) => dispatch({ type: actionTypes.SET_CLIENTS, clients: clients }),
        loginUser: username => dispatch({ type: actionTypes.LOGIN_USER, username: username })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
