import React from 'react';
import { useStyles } from './styles/HandleProductStyle';
import ButtonModal from '../UI/ButtonModal';


const AddProductButton = () => {
    const classes = useStyles();

    return (
        <ButtonModal className={classes.addProduct} variant="contained" color="primary" buttonText="Add Product">Add Product</ButtonModal>
    )
}

export default AddProductButton;