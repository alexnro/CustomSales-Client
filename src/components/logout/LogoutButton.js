import React from 'react';
import { Button } from '@material-ui/core';
import axios from '../../axiosBaseUrl';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const logout = (props) => {
    axios.put("/users/logout", { Username: props.user.Username })
        .then(response => {
            console.log(response);
            localStorage.removeItem("token");
        })
        .catch(error => {
            console.log(error);
        })
    props.logoutUser();
}

const LogoutButton = (props) => {
    return (
        <Button onClick={() => logout(props)} color="inherit">Logout</Button>
    )
}

const mapStateToProps = state => {
    return {
        user: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch({ type: actionTypes.LOGOUT_USER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);