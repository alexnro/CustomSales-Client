import React, { Component } from 'react';
import axios from 'axios';
import ProductsComponent from '../components/products/ProductsComponent';

class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get("https://localhost:44345/api/products")
            .then(response => {
                this.setState({ products: response.data });
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        return (
            <div>
                <ProductsComponent />
            </div>
        );
    }
}
export default Products;