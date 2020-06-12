import React, { Component } from 'react';
import LoginComponent from '../components/login/LoginComponent';


class Login extends Component {
    render() {
        return (
            <LoginComponent exitLogin={this.props.exitLogin} />
        )
    }
}

export default Login;
