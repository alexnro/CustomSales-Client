import React from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import styles from './ProductsStyle';


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

// NEEDS REDUX TO WORKS BECAUSE PROPS WITH ASYNC DATA DOESN'T WORK AS I WANT
// ALSO NEEDS STYLE
const ProductsComponent = (props) => {
    const classes = styles();
    console.log(props);
    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key={"props.products[0].imageUrl"}>
                    <img src={"tile.img"} alt={"tile.title"} />
                    <GridListTileBar
                        title={"tile.title"}
                        subtitle={<span>by: {"tile.author"}</span>}
                        actionIcon={
                            <IconButton aria-label={`info about ${"tile.title"}`} className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
export default ProductsComponent;
