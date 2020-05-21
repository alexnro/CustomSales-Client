import React from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import useStyles from './ProductsStyle';


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

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} cols={4} className={classes.gridList} spacing={12}>
                {props.products.map(product => {
                    return (
                        <GridListTile key={product.id}>
                            <img src={product.imageUrl} alt={product.name} />
                            <GridListTileBar
                                title={product.name}
                                actionIcon={
                                    <IconButton aria-label={`info about ${product.mame}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    )
                })}
            </GridList>
        </div>
    );
}

export default ProductsComponent;
