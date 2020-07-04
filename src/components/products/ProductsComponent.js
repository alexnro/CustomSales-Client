import React, { useState } from 'react';
import { GridList, GridListTile, GridListTileBar, TextField } from '@material-ui/core';
import { useStyles, styles } from './styles/ProductsStyle';
import { withStyles } from '@material-ui/core/styles';
import HandleProductButtons from './handleProduct/HandleProductButtons';
import AddProductToCartInput from './AddProductToCartInput';
import AddProductButton from './addProduct/AddProductButton';
import { connect } from 'react-redux';


const ProductsComponent = (props) => {
    const classes = useStyles();

    const [filterText, setFilterText] = useState("");
    const [products, setProducts] = useState(props.neworder ? props.shopCart.Client.VisibleProducts : props.products);

    // Redirect to main page if client is not set for new order
    if (props.neworder && !props.shopCart.Client) {
        alert("You need to select a client first!");
        window.location.pathname = '/menu';
    }

    const applyFilter = (text) => {
        if (text === "") {
            setProducts(props.neworder ? props.shopCart.Client.VisibleProducts : props.products);
        }
        setProducts(props.products.filter(product => {
            return product.Name.toLowerCase().includes(text.toLowerCase());
        }));
    }

    const handleChange = event => {
        applyFilter(event.target.value);
        setFilterText(event.target.value);
    }

    return (
        <div className={classes.root}>
            <div className={props.classes.margintop}>
                {props.neworder ?
                    <h3 className={props.classes.clientName}>Client: {props.shopCart.Client.Name}</h3>
                    : props.user.Role === 1 ? <AddProductButton /> : null}
                <TextField className={classes.filter} label="Filter products" size="small" variant="filled" value={filterText} onChange={handleChange} />
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
