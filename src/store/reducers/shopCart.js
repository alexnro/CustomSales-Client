import * as actionTypes from '../actions';

const initialState = {
    Products: [],
    TotalPrice: 0,
    Client: ""
}

const calculateTotalPrice = (products) => {
    let newTotalPrice = 0;

    if (typeof products === 'undefined') { return newTotalPrice; }

    for (const product of products) {
        newTotalPrice += product.Price * product.Quantity;
    }

    return parseFloat(newTotalPrice.toFixed(2));
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            action.product.Quantity = action.quantity;
            let addedProduct = state.Products.concat(action.product);
            return {
                ...state,
                Products: addedProduct
            };
        case actionTypes.CALCULATE_TOTAL_PRICE:
            return {
                ...state,
                TotalPrice: calculateTotalPrice(state.Products)
            };
        case actionTypes.UPDATE_FROM_CART:
            var updatedProducts = state.Products.map(product => product.Id === action.filterProduct.Id ? action.filterProduct : product)
            return {
                ...state,
                Products: updatedProducts
            }
        case actionTypes.DELETE_FROM_CART:
            var productsCartUpdated = state.Products.filter(product => product.Id !== action.productData.Id);
            return {
                ...state,
                Products: productsCartUpdated,
                TotalPrice: calculateTotalPrice(productsCartUpdated)
            }
        case actionTypes.SET_CLIENT:
            return {
                ...state,
                Client: action.client
            }
        default:
            return state;
    }
}

export default reducer;
