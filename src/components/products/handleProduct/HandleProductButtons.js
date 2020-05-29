import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
                    <ProductFormModal productdata={props.productdata} />
                </ButtonModal>
                <ButtonModal buttontext="Delete" color="secondary">
                    <DeleteProductModal productdata={props.productdata} />
                </ButtonModal>
            </ButtonGroup>
        </div>
    )
}

export default HandleProductButtons;
