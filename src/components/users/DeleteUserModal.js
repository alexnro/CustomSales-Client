import React from 'react'
import { Divider, Button } from '@material-ui/core';
import { useStyles } from './UserModalsStyle';
import axios from '../../axiosBaseUrl';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions';


const DeleteUserModal = props => {
    const classes = useStyles();

    const handleDelete = () => {
        axios.delete("/users?userId=" + props.user.Id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(() => {
                props.deleteUser(props.user);
            })
            .catch(error => {
                alert("Error: Can't delete user!");
            })
    }

    const handleResetPassword = () => {
        axios.put("/users/resetPassword", props.user, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(() => {
                alert("Password reset!");
            })
            .catch(() => {
                alert("Error: Can't reset password!");
            })
    }

    return (
        <>
            <h2>Do you really want to {props.deleteuser ? "delete this user" : "reset password"}?</h2>
            <Divider className={classes.divider} />
            <Button onClick={props.deleteuser ? handleDelete : handleResetPassword} color="secondary">{props.deleteuser ? "Delete" : "Reset"}</Button>
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        deleteUser: user => dispatch({ type: actionTypes.DELETE_USER, user: user })
    }
}

export default connect(null, mapDispatchToProps)(DeleteUserModal);
