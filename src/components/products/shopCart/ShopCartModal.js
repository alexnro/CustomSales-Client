import React from 'react';
import ButtonModal from '../../UI/ButtonModal';
import { connect } from 'react-redux';
import { List, ListItem, Button } from '@material-ui/core';
import { useStyles } from './ShopCartStyle';
import * as actionTypes from '../../../store/actions';


const ShopCartModal = (props) => {
    const classes = useStyles();

    const getProductPrice = (price, quantity) => {
        let productPrice = price * quantity;
        return parseFloat(productPrice.toFixed(2));
    }

    const handleDelete = (productData) => {
        props.deleteFromCart(productData);
    }

    return (
        <>
            <ButtonModal iscart className={classes.modal}>
                <h1>Order</h1>
                <h2>Client: {props.shopCart.client ? props.shopCart.client : "None"}</h2>
                <List>
                    {props.shopCart.products ? props.shopCart.products.map(product => {
                        return (
                            <ListItem key={product.Id}>
                                <p className={classes.name}>{product.Name}</p>
                                <p className={classes.quantity}>x{product.Quantity}</p>
                                <p className={classes.price}>{getProductPrice(product.Price, product.Quantity)}€</p>
                                <Button onClick={() => handleDelete(product)} color="secondary" variant="outlined">Delete</Button>
                            </ListItem>
                        )
                    }) : null}
                    <ListItem>Total price: {props.shopCart.totalPrice}€</ListItem>
                </List>
                {props.shopCart.products.length !== 0 ?
                    <Button className={classes.addButton} variant="outlined" color="primary">Add Order</Button>
                    : null
                }
            </ButtonModal>
        </>
    )
}

const mapStateToProps = state => {
    return {
        shopCart: state.shopCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFromCart: productData => dispatch({ type: actionTypes.DELETE_FROM_CART, productData: productData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartModal);
