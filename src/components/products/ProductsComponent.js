import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { useStyles, styles } from './styles/ProductsStyle';
import { withStyles } from '@material-ui/core/styles';
import HandleProductButtons from './handleProduct/HandleProductButtons';
import AddProductToCartInput from './AddProductToCartInput';
import AddProductButton from './addProduct/AddProductButton';


const ProductsComponent = (props) => {
    const classes = useStyles();

    const isNewOrder = window.location.pathname === '/new-order' ? true : false;

    return (
        <div className={classes.root}>
            <div className={props.classes.margintop}>
                {isNewOrder ? null : <AddProductButton />}
                <GridList mt={150} cellHeight={240} cols={4} className={classes.gridList} spacing={12}>
                    {props.products !== undefined ? props.products.map(product => {
                        return (
                            <GridListTile key={product.Id}>
                                <img src={product.ImageUrl} alt={product.Name} />
                                <GridListTileBar
                                    title={product.Name}
                                    subtitle={"Stock: " + product.Stock}
                                    actionIcon={
                                        isNewOrder ? <AddProductToCartInput stock={product.Stock} /> : <HandleProductButtons productdata={product} />
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

export default withStyles(styles)(ProductsComponent);
