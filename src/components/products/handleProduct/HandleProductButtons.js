import React from 'react';
import { ButtonGroup } from '@material-ui/core';
import { useStyles } from '../styles/HandleProductStyle';
import ButtonModal from '../../UI/ButtonModal';
import ProductFormModal from '../modal/ProductFormModal';
import DeleteProductModal from '../deleteProduct/DeleteProductModal';


const HandleProductButtons = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" aria-label="contained primary button group">
                <ButtonModal buttontext="Modify">
                    <ProductFormModal rebuildVisibleProductsLists={props.rebuildVisibleProductsLists} productdata={props.productdata} />
                </ButtonModal>
                <ButtonModal buttontext="Delete" color="secondary">
                    <DeleteProductModal rebuildVisibleProductsLists={props.rebuildVisibleProductsLists} productdata={props.productdata} />
                </ButtonModal>
            </ButtonGroup>
        </div>
    )
}

export default HandleProductButtons;
