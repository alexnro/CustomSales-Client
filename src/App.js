import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AppBarComponent from './components/header/AppBarComponent';
import GridMenu from './containers/GridMenu';
import Products from './containers/Products';
import Login from './containers/Login';
import axios from './axiosBaseUrl';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import Orders from './containers/Orders';
import Clients from './containers/Clients';
import NewOrder from './containers/NewOrder';
import Users from './containers/Users';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            clients: []
        };

        this.getProducts = this.getProducts.bind(this);
        this.getClients = this.getClients.bind(this);
        this.getOrders = this.getOrders.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.getData = this.getData.bind(this);
        this.exitLogin = this.exitLogin.bind(this);
        this.authenticateToken = this.authenticateToken.bind(this);
    }

    exitLogin() {
        this.getData();
    }

    authenticateToken() {
        const token = localStorage.getItem("token");
        axios.post("/users/authenticate", { "Token": token }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                if (response.data) {
                    this.props.loginUser(response.data)
                    this.getData();
                }
            })
    }

    getData() {
        this.getProducts();
        this.getClients();
        this.getOrders();
        if (this.props.user.Role === 1) {
            this.getUsers();
        }
    }

    getProducts() {
        axios.get("/products", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                this.setState({ products: response.data }, () => this.props.setProducts(this.state.products));
            })
    }

    getClients() {
        axios.get("/clients", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                this.setState({ clients: response.data }, () => this.props.setClients(this.state.clients));
            })
    }

    getOrders() {
        axios.get("/orders", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                this.props.setOrders(response.data);
            })
    }

    getUsers() {
        axios.get("/users", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                this.props.setUsers(response.data);
            })
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.authenticateToken();
        }
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
                    <Route path="/new-order" component={NewOrder} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/clients" component={Clients} />
                    <Route path="/users" component={Users} />
                    <Route path="/menu" component={GridMenu} />
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
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProducts: products => dispatch({ type: actionTypes.SET_PRODUCTS, products: products }),
        setClients: clients => dispatch({ type: actionTypes.SET_CLIENTS, clients: clients }),
        loginUser: user => dispatch({ type: actionTypes.LOGIN_USER, user: user }),
        setUsers: users => dispatch({ type: actionTypes.SET_USERS, users: users }),
        setOrders: orders => dispatch({ type: actionTypes.SET_ORDERS, orders: orders })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
