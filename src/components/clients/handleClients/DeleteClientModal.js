import React from 'react';
import { Divider, Button } from '@material-ui/core';
import { useStyles } from './ClientModalsStyle';
import axios from '../../../axiosBaseUrl';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';


const DeleteClientModal = props => {
    const classes = useStyles();

    const handleDelete = () => {
        axios.delete("/clients?clientId=" + props.client.Id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(() => {
                props.deleteClient(props.client.Id);
            })
    }

    return (
        <>
            <h2>Do you really want to delete this client?</h2>
            <Divider className={classes.divider} />
            <Button onClick={handleDelete} color="secondary">Delete</Button>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        deleteClient: clientId => dispatch({ type: actionTypes.DELETE_CLIENT, clientId: clientId })
    }
}

export default connect(null, mapDispatchToProps)(DeleteClientModal);
