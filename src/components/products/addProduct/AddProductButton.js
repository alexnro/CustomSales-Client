import React from 'react';
import { useStyles } from '../styles/AddProductStyle';
import ButtonModal from '../../UI/ButtonModal';
import ProductFormModal from '../modal/ProductFormModal';


const AddProductButton = props => {
    const classes = useStyles();

    return (
        <ButtonModal className={classes.openButton} variant="contained" color="primary" buttontext="Add Product">
            <ProductFormModal rebuildVisibleProductsLists={props.rebuildVisibleProductsLists} addproduct={true} />
        </ButtonModal>
    )
}

export default AddProductButton;
