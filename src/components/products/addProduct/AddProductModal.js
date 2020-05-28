import React from 'react';
import { useStyles } from '../styles/AddProductStyle';
import TextField from '@material-ui/core/TextField';
import { Button, List, ListItem } from '@material-ui/core';


const AddProductModal = () => {
    const classes = useStyles();


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <List>
                <ListItem >
                    <p className={classes.label}>Product name: </p>
                    <TextField className={classes.input} required autoFocus label="Product name" variant="outlined" />
                </ListItem>
                <ListItem >
                    <p className={classes.label}>Price: </p>
                    <TextField className={classes.input} required type="number" label="Price" variant="outlined" />
                </ListItem>
                <ListItem >
                    <p className={classes.label}>Stock: </p>
                    <TextField className={classes.input} required type="number" label="Stock" variant="outlined" />
                </ListItem>
                <ListItem >
                    <p className={classes.label}>Image: </p>
                    <input required type="file" />
                </ListItem>
                <ListItem >
                    <Button className={classes.addButton} variant="contained" color="primary">Add Product</Button>
                </ListItem>
            </List>
        </form>
    );

}

export default AddProductModal;
