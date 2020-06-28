import React, { Component } from 'react';
import ProductsComponent from '../components/products/ProductsComponent';


class NewOrder extends Component {

    render() {
        return (
            <div>
                <ProductsComponent neworder />
            </div>
        );
    }
}

export default NewOrder;
