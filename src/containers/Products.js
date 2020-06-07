import React, { Component } from 'react';
import ProductsComponent from '../components/products/ProductsComponent';
import { connect } from 'react-redux';

class Products extends Component {

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

export default connect(mapStateToProps)(Products);
