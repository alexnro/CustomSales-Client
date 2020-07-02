import React, { Component } from 'react';
import { withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { styles } from './LoginStyle';
import axios from '../../axiosBaseUrl';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { Redirect } from 'react-router-dom';
import ButtonModal from '../UI/ButtonModal';
import CreatePasswordModal from './CreatePasswordModal';


class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Username: "",
            Password: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleCreatePassword = this.handleCreatePassword.bind(this);
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleLogin() {
        if (this.state.Username !== "") {
            axios.post("/users/login", this.state)
                .then(response => {
                    console.log(response);
                    if (response.data.Username === this.state.Username) {
                        localStorage.setItem("token", response.data.Token);
                        this.props.loginUser(response.data);
                        this.props.exitLogin();
                    } else {
                        alert("Username or password is incorrect!");
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            alert("You need to write an username");
        }
    }

    handleCreatePassword() {

    }

    render() {

        if (this.props.user.IsAuth) {
            return <Redirect to="/menu" />
        }

        const classes = this.props.classes;

        return (
            <div className={classes.login}>
                <h2>CustomSales</h2>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Face />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField onChange={this.handleChange} name="Username" id="username" label="Username" type="text" fullWidth autoFocus required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Fingerprint />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField onChange={this.handleChange} name="Password" id="password" label="Password" type="password" fullWidth required />
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <p className={classes.text}>*If you don't have a password already or your password has been reset please click on create password</p>
                </Grid>
                <Grid container justify="center" style={{ marginTop: '20px' }}>
                    <Button onClick={this.handleLogin} variant="contained" color="primary">Login</Button>
                    <ButtonModal className={classes.passwordButton} buttontext="Create password" variant="outlined" color="primary">
                        <CreatePasswordModal exitLogin={this.props.exitLogin} />
                    </ButtonModal>
                </Grid>
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
        loginUser: user => dispatch({ type: actionTypes.LOGIN_USER, user: user })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginComponent));
