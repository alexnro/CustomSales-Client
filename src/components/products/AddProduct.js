import React from 'react';
import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './ProductsStyle';

const AddProduct = (props) => {
    const classes = useStyles();

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
            <FormControl variant="filled" className={classes.formControl}>
                <Select
                    value={quantity}
                    onChange={handleChange}
                    autoWidth
                >
                    {menuItems.map(item => {
                        return (
                            <MenuItem value={item}>{item}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
        </div>
    )
}

export default AddProduct;
