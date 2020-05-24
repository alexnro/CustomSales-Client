import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { useStyles, styles } from './ProductsStyle';
import { withStyles } from '@material-ui/core/styles';
import ProductInfoButton from './ProductInfoButton';
import AddProduct from './AddProduct';


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */



const ProductsComponent = (props) => {
    const classes = useStyles();

    const isNewOrder = window.location.pathname === '/new-order' ? true : false;

    return (
        <div className={classes.root}>
            <div className={props.classes.margintop}>
                <GridList mt={150} cellHeight={240} cols={4} className={classes.gridList} spacing={12}>
                    {props.products.map(product => {
                        return (
                            <GridListTile key={product.id}>
                                <img src={product.imageUrl} alt={product.name} />
                                <GridListTileBar
                                    title={product.name}
                                    subtitle={"Stock: " + product.stock}
                                    actionIcon={
                                        isNewOrder ? <AddProduct stock={product.stock} /> : <ProductInfoButton />
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
