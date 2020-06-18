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
    for (let i = 0; i <= props.productdata.Stock; i++) {
        menuItems.push(i);
    }

    const handleAddProduct = () => {
        props.addProductToCart(props.productdata, quantity);
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

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: (product, quantity) => dispatch({ type: actionTypes.ADD_TO_CART, product: product, quantity: quantity }),
        calculateTotalPrice: () => dispatch({ type: actionTypes.CALCULATE_TOTAL_PRICE })
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddProductToCartInput));
