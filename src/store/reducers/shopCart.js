import * as actionTypes from '../actions';

const initialState = {
    products: [],
    totalPrice: 0,
    client: ""
}

const calculateTotalPrice = (state) => {
    let newTotalPrice = 0;

    if (typeof state.products === 'undefined') { return newTotalPrice; }

    for (const product of state.products) {
        newTotalPrice += product.Price * product.Quantity;
    }

    return parseFloat(newTotalPrice.toFixed(2));
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            action.product.Quantity = action.quantity;
            let addedProduct = state.products.concat(action.product);
            return {
                ...state,
                products: addedProduct
            };
        case actionTypes.CALCULATE_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: calculateTotalPrice(state)
            };
        case actionTypes.DELETE_FROM_CART:
            var productsCartUpdated = state.products.filter(product => product.Id !== action.productData.Id);
            return {
                ...state,
                products: productsCartUpdated,
                totalPrice: calculateTotalPrice(productsCartUpdated)
            }
        default:
            return state;
    }
}

export default reducer;
