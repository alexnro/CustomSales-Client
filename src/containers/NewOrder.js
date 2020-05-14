import React, { Component } from 'react';
import axios from 'axios';

class NewOrder extends Component {

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
        const products = this.state.products.map(product => {
            return <p key={product.id}>{JSON.stringify(product)}</p>
        })

        return (
            <div>
                {products}
            </div>
        );
    }
}
export default NewOrder;