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

    // Redirect to main page if client is not set for new order
    if (props.neworder && !props.shopCart.Client) {
        alert("You need to select a client first!");
        window.location.pathname = '/menu';
    }

    let products = props.products;

    if (props.neworder) {
        products = props.shopCart.Client.VisibleProducts;
    }

    return (
        <div className={classes.root}>
            <div className={props.classes.margintop}>
                {props.neworder ?
                    <h3 className={props.classes.clientName}>Client: {props.shopCart.Client.Name}</h3>
                    : props.user.Role === 1 ? <AddProductButton /> : null}
                <GridList mt={150} cellHeight={320} cols={4} className={classes.gridList} spacing={12}>
                    {products !== undefined ? products.map(product => {
                        return (
                            <GridListTile key={product.Id}>
                                <img src={product.ImageUrl} alt={product.Name} />
                                <GridListTileBar
                                    title={product.Name}
                                    subtitle={"Price: " + product.Price + "€ Stock: " + product.Stock}
                                    actionIcon={
                                        props.neworder ? <AddProductToCartInput productdata={product} /> : props.user.Role === 1 ? <HandleProductButtons productdata={product} /> : null
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
        products: state.products,
        shopCart: state.shopCart,
        user: state.user
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ProductsComponent));
