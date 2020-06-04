import * as actionTypes from '../actions';


const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return action.products;
        case actionTypes.ADD_PRODUCT:
            return state.concat(action.newProduct);
        case actionTypes.UPDATE_PRODUCT:
            var updatedState = state.map(product => product.Id === action.updatedProduct.Id ? action.updatedProduct : product)
            return updatedState;
        case actionTypes.DELETE_PRODUCT:
            return state.filter(product => product.Id !== action.productId);
        default:
            return state;
    }
};

export default reducer;