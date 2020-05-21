import React from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { useStyles, styles } from './ProductsStyle';
import { withStyles } from '@material-ui/core/styles';


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
            <div className={props.classes.margintop}>
                <GridList mt={150} cellHeight={180} cols={4} className={classes.gridList} spacing={12}>
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
        </div>
    );
}

export default withStyles(styles)(ProductsComponent);
