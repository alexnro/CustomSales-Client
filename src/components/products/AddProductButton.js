import React from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from './styles/HandleProductStyle';


const AddProductButton = () => {
    const classes = useStyles();

    return (
        <Button className={classes.addProduct} variant="contained" color="primary">Add Product</Button>
    )
}

export default AddProductButton;