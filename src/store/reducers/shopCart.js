import * as actionTypes from '../actions';

const initialState = {
    products: [],
    totalPrice: 0
}

const calculateTotalPrice = (actualPrice, newProduct) => {
    let costNewProducts = newProduct.Quantity * newProduct.Price;
    return actualPrice + costNewProducts;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            action.product.Quantity = action.quantity;
            console.log(action);
            let addedProduct = state.products.concat(action.product);
            let newPrice = calculateTotalPrice(state.totalPrice, action.product);
            return {
                ...state,
                products: addedProduct,
                totalPrice: newPrice
            }
        default:
            return state;
    }
}

export default reducer;
