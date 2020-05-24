import React from 'react';
import { IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { useStyles } from './ProductsStyle';

const ProductInfoButton = () => {
    const classes = useStyles();

    return (
        <IconButton className={classes.icon}>
            <InfoIcon />
        </IconButton>
    )
}

export default ProductInfoButton;
