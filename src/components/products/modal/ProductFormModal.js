import React, { useState } from 'react';
import { useStyles } from '../styles/AddProductStyle';
import TextField from '@material-ui/core/TextField';
import { Button, List, ListItem } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import firebase from 'firebase/app';
import axios from '../../../axiosBaseUrl';



const ProductFormModal = (props) => {
    const classes = useStyles([]);

    const storageRef = firebase.storage().ref();

    const [newProduct, setNewProduct] = useState({
        "Name": "",
        "Price": "",
        "Stock": "",
        "ImageUrl": ""
    });

    const [imageFile, setImageFile] = useState();

    const handleChange = (event) => {
        if (event.target.type !== "file") {
            const { name, value } = event.target;
            setNewProduct(prevState => ({ ...prevState, [name]: value }));
        } else if (event.target.type === "file") {
            console.log(event.target.files);
            const value = event.target.files[0];
            setImageFile(value);
        }
    }

    const postNewProduct = () => {
        axios.post("/products", newProduct)
            .then(response => {
                console.log(response);
                newProduct.Id = response.data.Id;
                props.addProduct(newProduct);
            })
    }

    const handleUpload = () => {
        var uploadTask = storageRef.child(imageFile.name).put(imageFile);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            snapshot => { },
            error => { },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                    newProduct.ImageUrl = downloadURL;
                    postNewProduct();
                })
            })
    }

    const addNewProduct = () => {
        newProduct.Price = parseFloat(newProduct.Price);
        newProduct.Stock = parseFloat(newProduct.Stock);
        handleUpload();
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
