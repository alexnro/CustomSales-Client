import React from 'react';
import { Divider, Button } from '@material-ui/core';
import { useStyles } from '../styles/DeleteProductModal';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import axios from '../../../axiosBaseUrl';


const DeleteProductModal = (props) => {
    const classes = useStyles();

    const deleteProduct = () => {
        axios.delete('/products?productId=' + props.productdata.Id);
    }

    const handleDelete = () => {
        deleteProduct();
        props.deleteProduct(props.productdata.Id);
    }

    return (
        <>
            <h2>Do you really want to delete this product?</h2>
            <Divider className={classes.divider} />
            <Button onClick={handleDelete} color="secondary">Delete</Button>
        </>
    );

}

const mapStateToProps = state => {
    return {
        product: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: (productId) => dispatch({ type: actionTypes.DELETE_PRODUCT, productId: productId })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProductModal);
