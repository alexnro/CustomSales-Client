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
            .then(response => {
                console.log(response);
                props.deleteUser(props.user);
            })
            .catch(error => {
                alert("Error: Can't delete user!");
                console.log(error);
            })
    }

    return (
        <>
            <h2>Do you really want to delete this client?</h2>
            <Divider className={classes.divider} />
            <Button onClick={handleDelete} color="secondary">Delete</Button>
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        deleteUser: user => dispatch({ type: actionTypes.DELETE_USER, user: user })
    }
}

export default connect(null, mapDispatchToProps)(DeleteUserModal);
