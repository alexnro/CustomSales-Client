import React from 'react';
import { Checkbox, List, ListItem, Button } from '@material-ui/core';
import { useStyles } from './ClientModalsStyle';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import axios from '../../../axiosBaseUrl';


const SelectProductsModal = props => {
    const classes = useStyles();

    let client = props.client;

    const isProductActive = product => {
        const filterProduct = client.VisibleProducts.filter(visibleProduct => visibleProduct.Id === product.Id)
        return filterProduct.length > 0 ? true : false;
    }

    const handleChange = (event, product) => {
        if (event.target.checked) {
            client.VisibleProducts = client.VisibleProducts.concat(product);
        } else {
            client.VisibleProducts = client.VisibleProducts.filter(visibleProduct => visibleProduct.Id !== product.Id);
        }
    }

    const handleSave = () => {
        axios.put("/clients", client, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log(response);
                props.updateClient(client);
                alert("Changes saved!");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <h2>Select what products will be shown to the client</h2>
            <List className={classes.productsList}>
                {props.products ? props.products.map(product => {
                    return (
                        <ListItem key={product.Id}>
                            <Checkbox
                                defaultChecked={isProductActive(product)}
                                onClick={event => handleChange(event, product)}
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            {product.Name}
                        </ListItem>
                    )
                }) : null}
            </List>
            <Button onClick={handleSave} color="primary" variant="contained">Save</Button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateClient: client => dispatch({ type: actionTypes.UPDATE_CLIENT, client: client })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectProductsModal);
