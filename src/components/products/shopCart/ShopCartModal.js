import React, { useState } from 'react';
import ButtonModal from '../../UI/ButtonModal';
import { connect } from 'react-redux';
import { List, ListItem, Button } from '@material-ui/core';
import { useStyles } from './ShopCartStyle';
import * as actionTypes from '../../../store/actions';
import axios from '../../../axiosBaseUrl';
import { Redirect } from 'react-router-dom';


const ShopCartModal = (props) => {
    const classes = useStyles();

    const [orderDone, setOrderDone] = useState(false);

    const getProductPrice = (price, quantity) => {
        let productPrice = price * quantity;
        return parseFloat(productPrice.toFixed(2));
    }

    const handleDelete = (productData) => {
        props.deleteFromCart(productData);
    }

    const addOrder = () => {
        const order = {
            products: props.shopCart.Products,
            totalPrice: props.shopCart.TotalPrice,
            client: props.shopCart.Client
        }
        axios.post("/orders", order, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                alert("Added order!");
                props.addOrder(props.shopCart, response.data.Id);
                setOrderDone(true);
            })
    }

    if (orderDone) {
        return <Redirect to="/orders" />
    }

    return (
        <>
            <ButtonModal iscart className={classes.modal}>
                <h1>Order</h1>
                <h2>Client: {props.shopCart.Client ? props.shopCart.Client.Name : "None"}</h2>
                <List>
                    {props.shopCart.Products ? props.shopCart.Products.map(product => {
                        return (
                            <ListItem key={product.Id}>
                                <p className={classes.name}>{product.Name}</p>
                                <p className={classes.quantity}>x{product.Quantity}</p>
                                <p className={classes.price}>{getProductPrice(product.Price, product.Quantity)}€</p>
                                <Button onClick={() => handleDelete(product)} color="secondary" variant="outlined">Delete</Button>
                            </ListItem>
                        )
                    }) : null}
                    <ListItem>Total price: {props.shopCart.TotalPrice}€</ListItem>
                </List>
                {props.shopCart.Products.length !== 0 ?
                    <Button onClick={addOrder} className={classes.addButton} variant="outlined" color="primary">Add Order</Button>
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
        deleteFromCart: productData => dispatch({ type: actionTypes.DELETE_FROM_CART, productData: productData }),
        addOrder: (order, Id) => dispatch({ type: actionTypes.ADD_ORDER, order: order, Id: Id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartModal);
