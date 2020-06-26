import React from 'react';
import { Checkbox, List, ListItem } from '@material-ui/core';
import { useStyles } from './ClientModalsStyle';
import { connect } from 'react-redux';


const SelectProductsModal = props => {
    const classes = useStyles();

    return (
        <div>
            <h2>Select what products will be shown to the client</h2>
            <List className={classes.productsList}>
                {props.products ? props.products.map(product => {
                    return (
                        <ListItem key={product.Id}>
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            {product.Name}
                        </ListItem>
                    )
                }) : null}
            </List>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(SelectProductsModal);
