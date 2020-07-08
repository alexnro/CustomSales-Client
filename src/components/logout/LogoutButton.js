import React from 'react';
import { Button } from '@material-ui/core';
import axios from '../../axiosBaseUrl';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const logout = (props) => {
    axios.put("/users/logout", { Username: props.user.Username }, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
        .then(() => {
            localStorage.removeItem("token");
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
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch({ type: actionTypes.LOGOUT_USER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);