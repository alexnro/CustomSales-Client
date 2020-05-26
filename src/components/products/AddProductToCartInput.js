import React from 'react';
import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { styles } from './styles/AddInputStyle';
import { withStyles } from '@material-ui/core/styles'

const AddProductToCartInput = (props) => {

    const [quantity, setQuantity] = React.useState('');
    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    let menuItems = [];
    for (let i = 0; i <= props.stock; i++) {
        menuItems.push(i);
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
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon className={props.classes.shopCart} />
            </IconButton>
        </div>
    )
}

export default withStyles(styles)(AddProductToCartInput);
