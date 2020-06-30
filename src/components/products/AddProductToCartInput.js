import React, { useState } from 'react';
import { IconButton, MenuItem, FormControl, Select } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { styles } from './styles/AddInputStyle';
import { withStyles } from '@material-ui/core/styles'
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';


const AddProductToCartInput = (props) => {

    const [quantity, setQuantity] = useState('');
    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    let menuItems = [];
    for (let i = 1; i <= props.productdata.Stock; i++) {
        menuItems.push(i);
    }

    const handleAddProduct = () => {
        const filterProduct = props.shopCart.Products.filter(product => product.Id === props.productdata.Id);
        if (typeof filterProduct != 'undefined' && filterProduct.length > 0) {
            filterProduct[0].Quantity = quantity;
            props.updateProductFromCart(filterProduct[0]);
        } else {
            props.addProductToCart(props.productdata, quantity);
        }
        props.calculateTotalPrice();
    }

    return (
        <div>
            <FormControl variant="filled">
                <Select
                    value={quantity}
                    onChange={handleChange}
                    autoWidth
                >
                    {menuItems.map(item => {
                        return (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <IconButton onClick={handleAddProduct} color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon className={props.classes.shopCart} />
            </IconButton>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        shopCart: state.shopCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: (product, quantity) => dispatch({ type: actionTypes.ADD_TO_CART, product: product, quantity: quantity }),
        updateProductFromCart: filterProduct => dispatch({ type: actionTypes.UPDATE_FROM_CART, filterProduct: filterProduct }),
        calculateTotalPrice: () => dispatch({ type: actionTypes.CALCULATE_TOTAL_PRICE })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddProductToCartInput));
