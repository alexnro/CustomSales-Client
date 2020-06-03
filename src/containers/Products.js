import React, { Component } from 'react';
import axios from '../axiosBaseUrl';
import ProductsComponent from '../components/products/ProductsComponent';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';

class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get("/products")
            .then(response => {
                this.setState({ products: response.data }, () => this.props.setProducts(this.state.products));
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        return (
            <div>
                <ProductsComponent products={this.props.products} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setProducts: (products) => dispatch({ type: actionTypes.SET_PRODUCTS, products: products })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);