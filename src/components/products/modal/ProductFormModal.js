import React, { useState } from 'react';
import { useStyles } from '../styles/AddProductStyle';
import TextField from '@material-ui/core/TextField';
import { Button, List, ListItem } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';


const ProductFormModal = (props) => {
    const classes = useStyles([]);

    const [newProduct, setNewProduct] = useState({
        "Name": "",
        "Price": "",
        "Stock": "",
        "ImageUrl": "https://firebasestorage.googleapis.com/v0/b/customsales-d3bd1.appspot.com/o/IMG-20150330-WA0000.jpg?alt=media&token=fda3df4b-39ad-466f-8a96-e976a7736664"
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewProduct(prevState => ({ ...prevState, [name]: value }));
    }

    const addNewProduct = () => {
        newProduct.Price = parseFloat(newProduct.Price);
        newProduct.Stock = parseFloat(newProduct.Stock);
        props.addProduct(newProduct);
    }

    const product = props.productdata;

    let nameValue = product != null ? product.Name : undefined;
    let priceValue = product != null ? product.Price : undefined;
    let stockValue = product != null ? product.Stock : undefined;

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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </ListItem>
                    {props.addproduct ?
                        <ListItem>
                            <p className={classes.label}>Image: </p>
                            <input required type="file" name="ImageUrl" onChange={handleChange} />
                        </ListItem>
                        : null}
                </List>
            </form>
            <Button onClick={addNewProduct} className={classes.addButton} variant="outlined" color="primary">
                {props.addproduct ? "Add Product" : "Modify Product"}
            </Button>
        </>
    );

}

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (newProduct) => dispatch({ type: actionTypes.ADD_PRODUCT, newProduct: newProduct })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormModal);
