import React from 'react';
import { useStyles } from '../styles/AddProductStyle';
import TextField from '@material-ui/core/TextField';
import { Button, List, ListItem } from '@material-ui/core';


const ProductFormModal = (props) => {
    const classes = useStyles();

    const product = props.productdata;

    let nameValue = product != null ? product.name : undefined;
    let priceValue = product != null ? product.price : undefined;
    let stockValue = product != null ? product.stock : undefined;

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <List>
                <ListItem >
                    <p className={classes.label}>Product name: </p>
                    <TextField
                        className={classes.input}
                        required
                        label="Product Name"
                        variant="outlined"
                        value={nameValue}
                    />
                </ListItem>
                <ListItem >
                    <p className={classes.label}>Price: </p>
                    <TextField
                        className={classes.input}
                        required
                        type="number"
                        label="Price"
                        variant="outlined"
                        value={priceValue}
                    />
                </ListItem>
                <ListItem >
                    <p className={classes.label}>Stock: </p>
                    <TextField
                        className={classes.input}
                        required
                        type="number"
                        label="Stock"
                        variant="outlined"
                        value={stockValue}
                    />
                </ListItem>
                {props.addproduct ?
                    <ListItem >
                        <p className={classes.label}>Image: </p>
                        <input required type="file" />
                    </ListItem>
                    : null}
                <ListItem >
                    <Button className={classes.addButton} variant="contained" color="primary">Add Product</Button>
                </ListItem>
            </List>
        </form>
    );

}

export default ProductFormModal;
