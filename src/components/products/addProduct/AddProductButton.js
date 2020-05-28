import React from 'react';
import { useStyles } from '../styles/HandleProductStyle';
import ButtonModal from '../../UI/ButtonModal';
import AddProductModal from './AddProductModal';


const AddProductButton = () => {
    const classes = useStyles();

    return (
        <ButtonModal className={classes.addProduct} variant="contained" color="primary" buttontext="Add Product">
            <AddProductModal />
        </ButtonModal>
    )
}

export default AddProductButton;