import React from 'react';
import { Divider, Button } from '@material-ui/core';
import { useStyles } from '../styles/DeleteProductModal';


const DeleteProductModal = (props) => {
    const classes = useStyles();

    return (
        <>
            <h2>Do you really want to delete this product?</h2>
            <Divider className={classes.divider} />
            <Button color="secondary">Delete</Button>
        </>
    );

}

export default DeleteProductModal;
