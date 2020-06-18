import React, { useState } from 'react';
import { useStyles } from '../styles/AddProductStyle';
import { Button, List, ListItem, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import firebase from 'firebase/app';
import axios from '../../../axiosBaseUrl';



const ProductFormModal = (props) => {
    const classes = useStyles([]);
    const product = props.productdata;

    const storageRef = firebase.storage().ref();

    const [newProduct, setNewProduct] = useState({
        "Name": product != null ? product.Name : undefined,
        "Price": product != null ? product.Price : undefined,
        "Stock": product != null ? product.Stock : undefined,
        "ImageUrl": product != null ? product.ImageUrl : undefined
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

    const updateProduct = () => {
        axios.put("/products", newProduct)
            .then(response => {
                console.log(response);
            })
    }

    const addNewProduct = () => {
        newProduct.Price = parseFloat(newProduct.Price);
        newProduct.Stock = parseFloat(newProduct.Stock);
        handleUpload();
    }

    const handleUpdate = () => {
        newProduct.Id = product.Id;
        updateProduct();
        props.updateProduct(newProduct);
    }


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
                            value={newProduct.Name}
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
                            value={newProduct.Price}
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
                            value={newProduct.Stock}
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
            <Button onClick={props.addproduct ? addNewProduct : handleUpdate} className={classes.addButton} variant="outlined" color="primary">
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
        addProduct: (newProduct) => dispatch({ type: actionTypes.ADD_PRODUCT, newProduct: newProduct }),
        updateProduct: (updatedProduct) => dispatch({ type: actionTypes.UPDATE_PRODUCT, updatedProduct: updatedProduct })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormModal);
