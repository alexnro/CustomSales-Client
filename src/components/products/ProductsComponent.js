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
                    {props.products.map(product => {
                        return (
                            <GridListTile key={product.id}>
                                <img src={product.imageUrl} alt={product.name} />
                                <GridListTileBar
                                    title={product.name}
                                    subtitle={"Stock: " + product.stock}
                                    actionIcon={
                                        isNewOrder ? <AddProductToCartInput stock={product.stock} /> : <HandleProductButtons productdata={product} />
                                    }
                                />
                            </GridListTile>
                        )
                    })}
                </GridList>
            </div>
        </div>
    );
}

export default withStyles(styles)(ProductsComponent);
