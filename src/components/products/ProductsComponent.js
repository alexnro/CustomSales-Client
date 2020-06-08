import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { useStyles, styles } from './styles/ProductsStyle';
import { withStyles } from '@material-ui/core/styles';
import HandleProductButtons from './handleProduct/HandleProductButtons';
import AddProductToCartInput from './AddProductToCartInput';
import AddProductButton from './addProduct/AddProductButton';
import { connect } from 'react-redux';


const ProductsComponent = (props) => {
    const classes = useStyles();

    const isNewOrder = window.location.pathname === '/new-order' ? true : false;

    // Redirect to main page if client is not set for new order
    if (isNewOrder && !props.shopCart.client) {
        window.location.href = '/';
    }

    return (
        <div className={classes.root}>
            <div className={props.classes.margintop}>
                {isNewOrder ?
                    <h3 className={props.classes.clientName}>Client: {props.shopCart.client.Name}</h3>
                    : <AddProductButton />}
                <GridList mt={150} cellHeight={320} cols={4} className={classes.gridList} spacing={12}>
                    {props.products !== undefined ? props.products.map(product => {
                        return (
                            <GridListTile key={product.Id}>
                                <img src={product.ImageUrl} alt={product.Name} />
                                <GridListTileBar
                                    title={product.Name}
                                    subtitle={"Price: " + product.Price + "€ Stock: " + product.Stock}
                                    actionIcon={
                                        isNewOrder ? <AddProductToCartInput productdata={product} /> : <HandleProductButtons productdata={product} />
                                    }
                                />
                            </GridListTile>
                        )
                    }) : null}
                </GridList>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        shopCart: state.shopCart
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ProductsComponent));
