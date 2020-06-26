import React from 'react';
import { Divider, Button } from '@material-ui/core';
import { useStyles } from './ClientModalsStyle';


const DeleteClientModal = props => {
    const classes = useStyles();

    const handleDelete = () => {

    }

    return (
        <>
            <h2>Do you really want to delete this client?</h2>
            <Divider className={classes.divider} />
            <Button onClick={handleDelete} color="secondary">Delete</Button>
        </>
    );
}

export default DeleteClientModal;
