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
        <>
            <form className={classes.root} autoComplete="off">
                <List>
                    <ListItem>
                        <p className={classes.label}>Product name: </p>
                        <TextField
                            className={classes.input}
                            required
                            label="Product Name"
                            variant="outlined"
                            name="Name"
                            value={nameValue}
                        />
                    </ListItem>
                    <ListItem>
                        <p className={classes.label}>Price: </p>
                        <TextField
                            className={classes.input}
                            required
                            type="number"
                            label="Price"
                            variant="outlined"
                            name="Price"
                            value={priceValue}
                        />
                    </ListItem>
                    <ListItem>
                        <p className={classes.label}>Stock: </p>
                        <TextField
                            className={classes.input}
                            required
                            type="number"
                            label="Stock"
                            variant="outlined"
                            name="Stock"
                            value={stockValue}
                        />
                    </ListItem>
                    {props.addproduct ?
                        <ListItem>
                            <p className={classes.label}>Image: </p>
                            <input required type="file" name="ImageUrl" />
                        </ListItem>
                        : null}
                </List>
            </form>
            <Button className={classes.addButton} variant="outlined" color="primary">
                {props.addproduct ? "Add Product" : "Modify Product"}
            </Button>
        </>
    );

}

export default ProductFormModal;
